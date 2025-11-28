// Rate limiting configuration
const LIMIT = 100; // Maximum number of requests
const PERIOD_MS = 60 * 60 * 1000; // 1 hour in milliseconds

// Define the ALLOWED ORIGIN for CORS
const ALLOWED_ORIGIN = 'https://glassmano.github.io'; 

// --- Durable Object Class ---
export class RateLimiterDO {
    constructor(state, env) {
        this.state = state;
        this.storage = state.storage;
    }

    async fetch(request) {
        const now = Date.now();
        const url = new URL(request.url);
        
        // Check if this is hash tracking based on a query parameter
        const isHashTracking = url.searchParams.get('tracking') === 'hash';

        if (isHashTracking) {
            // For hash tracking, only store the first used timestamp
            let firstUsed = await this.storage.get('firstUsed');
            
            if (!firstUsed) {
                firstUsed = now;
                await this.storage.put('firstUsed', firstUsed);
            }

            return new Response(JSON.stringify({
                firstUsed: firstUsed,
                allowed: true
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // For rate limiting (IP-based)
        let firstUsed = await this.storage.get('firstUsed');
        let count = await this.storage.get('count') || 0;
        let windowStart = await this.storage.get('windowStart') || now;

        // Check if we're in a new window
        if (now - windowStart > PERIOD_MS) {
            count = 0;
            windowStart = now;
        }

        // Check if rate limit is exceeded
        if (count >= LIMIT) {
            const resetIn = Math.ceil((PERIOD_MS - (now - windowStart)) / 1000);
            
            return new Response(JSON.stringify({
                allowed: false,
                remaining: 0,
                resetIn: resetIn,
                lastUsed: windowStart,
                limit: LIMIT,
                periodSeconds: PERIOD_MS / 1000
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Increment counter and update state
        count++;
        await this.storage.put('count', count);
        await this.storage.put('windowStart', windowStart);
        
        if (!firstUsed) {
            firstUsed = now;
            await this.storage.put('firstUsed', firstUsed);
        }

        return new Response(JSON.stringify({
            allowed: true,
            remaining: LIMIT - count,
            resetIn: Math.ceil((PERIOD_MS - (now - windowStart)) / 1000),
            lastUsed: firstUsed,
            limit: LIMIT,
            periodSeconds: PERIOD_MS / 1000
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    async sql(query, ...params) {
        return this.storage.sql.exec(query, ...params);
    }
}

// --- Helper Functions ---

/**
 * Hashes an input string using the SHA-256 algorithm (Web Crypto API).
 * @param {string} message The string to hash.
 * @returns {Promise<string>} The SHA-256 hash as a hexadecimal string.
 */
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b =>
        ('00' + b.toString(16)).slice(-2)
    ).join('');
    return hashHex;
}

/**
 * Formats a timestamp into a human-readable date string
 * @param {number} timestamp The timestamp in milliseconds
 * @returns {string} Formatted date string
 */
function formatFirstUsedDate(timestamp) {
    if (!timestamp) return 'never';
    
    const date = new Date(timestamp);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        timeZoneName: 'short'
    };
    
    return date.toLocaleString('en-US', options);
}

/**
 * Fetches a tarot reading from a Workers AI model, seeded by the input hash.
 * @param {object} env The environment variables (must contain AI binding).
 * @param {string} hash The input string (e.g., a block hash) to generate the seed.
 * @returns {Promise<string>} The generated reading text or an error message.
 */
async function getTarotReading(env, hash, meaning) {
    const hashHex = await sha256(hash);
    let seedNumber = 0;

    if (hashHex && hashHex.length >= 5) {
        seedNumber = parseInt(hashHex.substring(0, 5), 16); 
    }

    if (!env.AI) {
        return 'AI binding missing in settings.';
    }

    try {
        const prompt = 'withount saying you are an AI, give me a generic fortune telling phrasing,' +
            ' with meaning ' + meaning

        const aiRequest = {
            prompt: prompt,
            max_tokens: 512,
            temperature: 0.1,
            seed: seedNumber,
        };

        const aiResponse = await env.AI.run(
            '@cf/mistral/mistral-7b-instruct-v0.1', 
            aiRequest
        );

        const rawText = aiResponse.response || aiResponse.text;
        const readingText = rawText.trim().replace(/^"|"$/g, ''); 

        return readingText;        
    } catch (e) {
        return JSON.stringify({ error: "Failed to generate reading using Workers AI.", details: e.message });
    }
}

// --- Main Worker Export ---
export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const blockHash = url.searchParams.get('hash');
        const meaning = url.searchParams.get('meaning');
        
        const SUCCESS_HEADERS = { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
        };
        
        // CORS Pre-flight Check
        if (request.method === 'OPTIONS') {
             return new Response(null, {
                status: 204,
                headers: {
                    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    'Access-Control-Max-Age': '86400',
                },
             });
        }

        // Input Validation
        if (!blockHash || !meaning) {
             const message = !blockHash ? "Missing 'hash' parameter." : "Missing 'meaning' parameter.";
             return new Response(
                JSON.stringify({ status: "error", message: message }), 
                { status: 400, headers: SUCCESS_HEADERS }
            );
        }
        
        // Check for Durable Object binding
        if (!env.RATE_LIMITER_DO) {
             return new Response(
                JSON.stringify({ status: "error", message: "RATE_LIMITER_DO binding is missing." }), 
                { status: 500, headers: SUCCESS_HEADERS }
            );
        }
        
        // Get client IP for rate limiting
        const clientIP = request.headers.get('CF-Connecting-IP') || 
                         request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() || 
                         'unknown';
        
        // Rate limiting check
        const rateLimitId = env.RATE_LIMITER_DO.idFromName(clientIP);
        const rateLimitStub = env.RATE_LIMITER_DO.get(rateLimitId);
        const doResponse = await rateLimitStub.fetch(request.url, { method: 'POST' });
        const rateLimitResult = await doResponse.json();
        
        // Get global first used timestamp for this hash
        let hashTrackingResult = { firstUsed: null };
        
        try {
            const hashTrackingId = env.RATE_LIMITER_DO.idFromName(`hash:${blockHash}`);
            const hashTrackingStub = env.RATE_LIMITER_DO.get(hashTrackingId);
            
            const hashTrackingUrl = new URL(request.url);
            hashTrackingUrl.searchParams.set('tracking', 'hash');
            
            const hashTrackingResponse = await hashTrackingStub.fetch(hashTrackingUrl.toString(), { method: 'POST' });
            hashTrackingResult = await hashTrackingResponse.json();
        } catch (error) {
            // Silently fail and use default null value
        }
        
        // Format the first used message
        const firstUsedMessage = hashTrackingResult.firstUsed 
            ? `First used on ${formatFirstUsedDate(hashTrackingResult.firstUsed)}`
            : '';
        
        // Check if rate limited
        if (!rateLimitResult.allowed) {
            return new Response(
                JSON.stringify({ 
                    status: "error", 
                    message: "Rate limit exceeded for this IP address.",
                    firstUsedMessage: firstUsedMessage,
                    firstUsed: hashTrackingResult.firstUsed ? new Date(hashTrackingResult.firstUsed).toISOString() : null,
                    resetInSeconds: rateLimitResult.resetIn
                }), 
                { 
                    status: 429,
                    headers: { 
                        ...SUCCESS_HEADERS, 
                        'Retry-After': rateLimitResult.resetIn.toString() 
                    }
                }
            );
        }
        
        // Generate tarot reading
        const tarotReading = await getTarotReading(env, blockHash, meaning);
        
        const rpcResponse = {
            reading: tarotReading,
            firstUsedMessage: firstUsedMessage,
            metadata: {
                firstUsed: hashTrackingResult.firstUsed ? new Date(hashTrackingResult.firstUsed).toISOString() : null,
                remainingRequests: rateLimitResult.remaining,
                limit: rateLimitResult.limit || 'N/A',
                periodSeconds: rateLimitResult.periodSeconds || 'N/A'
            }
        };
        
        return new Response(
            JSON.stringify(rpcResponse, null, 2),
            { status: 200, headers: SUCCESS_HEADERS }
        ); 
    }
};