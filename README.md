# live

https://glassmano.github.io/tarot/

# instructions on how to fork

This project uses a cloudflare worker.

The cloudflare worker needs to be deployed using wrangler.

The worker uses RateLimiterDO to track rate limiting and last usage information.

1. fork the repo using the git gui.

2. update this readme to use the url

    https://${{ github.repository }}.github.io/tarot/

3. the app should work, except it returns an error after you click 'draw glyph' on the reading page.

4. set the allowed origin in worker.js

    const ALLOWED_ORIGIN = 'https://"${{ github.repository_owner }}.github.io'; 

4. install nodejs and wrangler

    https://nodejs.org/en/download/

    https://developers.cloudflare.com/workers/wrangler/install-and-update/

5. deploy the wrangler toml, this will create the RATE_LIMITER_DO binding and the tarot-worker worker.js.

```
cd cloudflare-worker;
npx wrangler deploy;
```

8. update script.js to point to your cloudflare worker

            // --- WORKER URL ---
            const WORKER_URL = 'https://tarot-worker.glassmano.workers.dev';

becomes

            const WORKER_URL = '${{ cloudflare.worker.url }}';

9. test that the code works, by submitting payment code 1.

It should return a prediction, from the AI.
