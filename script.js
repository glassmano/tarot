// --- WORKER URL ---
const WORKER_URL = 'https://tarot-worker.glassmano.workers.dev';

// --- TRANSLATION DATA CORE ---
    const translations = {
        en: {
            // UI Text
            appName: "PHANTOM ORACLE // GHOST-NET",
            homeNode: "HOME_NODE",
            startReading: "INITIATE_CHANNELING",
            cardIndex: "ARCHIVE_GLYPHS",
            systemMessage: "SPECTRAL BROADCAST",
            acknowledge: "ACKNOWLEDGE [RECEIVE]",
            accessFuture: "Channel the unknown through the echoes of the Ghost-Net.",
            initiateReadout: "INITIATE ETHERIC PROJECTION",
            viewArchives: "ACCESS LOST ARCHIVES",
            protocol: "PROTOCOL OMEGA-PHANTOM",
            protocolDesc: "The system will randomly access a node from the Major Arcana data core. This single draw represents your current trajectory within the spectral plane. Consult the glyphs. Interpret the warnings. Survival is uncertain.",
            deckInterface: "ETHERIC DECK (MAJOR ARCANA)",
            deckDesc: "Click the spectral card to pull your current data echo.",
            drawCardEngage: "DRAW GLYPH [ENGAGE]",
            readoutComplete: "PROJECTION COMPLETE:",
            reversedPosition: ":: CORRUPTED SIGNAL ::",
            uprightPosition: ":: ETHERIC ECHO ::",
            systemError: "SYSTEM CORRUPTION/MANIFESTATION",
            holographicInterpretation: "ETHERIC INTERPRETATION",
            coreData: "CORE GLYPH ATTRIBUTES:",
            reInitiate: "RE-INITIATE CHANNELING",
            dataArchives: "DATA ARCHIVES: MAJOR ARCANA GLYPHS",
            selectNode: "Select a glyph from the grid below to view its full spectral specification.",
            dataCorruption: "DATA CORRUPTION",
            cardNotFound: "Requested glyph data not found in archive.",
            viewFullSpec: "VIEW FULL SPEC",
            closeSpec: "[CLOSE SPEC]",
            uprightTitle: "ETHERIC ECHO (Interpreted):",
            reversedTitle: "CORRUPTED SIGNAL (Manifestation/Warning):",
            qrScanner: "QR_SCANNER",
            qrScannerTitle: "QR SIGNAL SCANNER",
            qrScannerDesc: "Activate the optical scanner to decode QR signals from the Ghost-Net.",
            qrPositionCode: "Position QR code within scanner frame",
            qrActivateScanner: "ACTIVATE SCANNER [ENGAGE]",
            qrCloseScanner: "[TERMINATE SCAN]",
            qrDetected: "SIGNAL DETECTED",
            qrCameraError: "CAMERA ACCESS DENIED",
            qrCameraErrorMsg: "Optical scanner access denied or unavailable. Check system permissions.",

            // Card Data (English - kept consistent)
            MAJOR_ARCANA: [
                { id: 0, name: "THE FOOL", title: "THE GLITCH", meaningUp: "A reckless start, limitless potential, untainted code. You are outside the system.", meaningRev: "System error, self-sabotage, naive programming. You are disconnected from the network.", keywords: ["New Beginnings", "Innocence", "Risk"] },
                { id: 1, name: "THE MAGICIAN", title: "THE CODER", meaningUp: "Mastery of resources, focused intent, full control of the matrix. Manifestation is online.", meaningRev: "Manipulation, untapped skill, data corruption. Your power source is offline.", keywords: ["Skill", "Action", "Focus"] },
                { id: 2, name: "THE HIGH PRIESTESS", title: "THE ORACLE", meaningUp: "Intuition, hidden knowledge, passive observation. Trust the internal AI core.", meaningRev: "Secrets revealed, lack of focus, blocked intuition. The firewall is too strong.", keywords: ["Mystery", "Intuition", "Subconscious"] },
                { id: 3, name: "THE EMPRESS", title: "THE MEGA-CITY", meaningUp: "Abundance, nurturing, creativity, luxury. Life thriving in the neon streets.", meaningRev: "Dependence, over-indulgence, creative block. The city's pollution is overwhelming.", keywords: ["Fertility", "Beauty", "Maternity"] },
                { id: 4, name: "THE EMPEROR", title: "THE NETWORK", meaningUp: "Authority, structure, control, stability. The grid is stable and predictable.", meaningRev: "Domination, rigidity, unchecked ego. The network is too oppressive.", keywords: ["Power", "Structure", "Discipline"] },
                { id: 5, name: "THE HIEROPHANT", title: "THE SECT LEADER", meaningUp: "Conformity, tradition, spiritual guidance from the old world. Following the established protocol.", meaningRev: "Rebellion, nonconformity, challenge to authority. Breaking the outdated rules.", keywords: ["Tradition", "Beliefs", "Education"] },
                { id: 8, name: "STRENGTH", title: "THE CYBORG", meaningUp: "Courage, inner strength, mastery over desire. Seamless integration of flesh and machine.", meaningRev: "Weakness, self-doubt, lack of control. Rejecting your augmented self.", keywords: ["Bravery", "Compassion", "Patience"] },
                { id: 10, name: "WHEEL OF FORTUNE", title: "THE ALGORITHM", meaningUp: "Change, destiny, sudden fortune. The luck loop has been activated.", meaningRev: "Bad luck, cycles ending, resistance to change. Stuck in a recurring code loop.", keywords: ["Destiny", "Cycles", "Luck"] },
                { id: 13, name: "DEATH", title: "THE REBOOT", meaningUp: "End of a cycle, transformation, profound change. Necessary system reset.", meaningRev: "Resistance to change, stuck in limbo, fear of the unknown. Refusing the system update.", keywords: ["Ending", "Transition", "Elimination"] },
                { id: 16, name: "THE TOWER", title: "THE SYSTEM CRASH", meaningUp: "Sudden upheaval, catastrophic failure, revelation of lies. The grid collapses.", meaningRev: "Avoiding disaster, fear of suffering, delayed destruction. A silent, festering bug.", keywords: ["Chaos", "Ruin", "Sudden Change"] },
            ]
        },
        es: {
            // UI Text (Spanish translations)
            appName: "ORÁCULO FANTASMA // RED-ESPECTRAL",
            homeNode: "NODO_INICIO",
            startReading: "INICIAR_CANALIZACIÓN",
            cardIndex: "ARCHIVO_GLIFOS",
            systemMessage: "TRANSMISIÓN ESPECTRAL",
            acknowledge: "RECONOCER [RECIBIR]",
            accessFuture: "Canaliza lo desconocido a través de los ecos de la Red-Espectral.",
            initiateReadout: "INICIAR PROYECCIÓN ETÉRICA",
            viewArchives: "ACCEDER A ARCHIVOS PERDIDOS",
            protocol: "PROTOCOLO OMEGA-FANTASMA",
            protocolDesc: "El sistema accederá aleatoriamente a un nodo del núcleo de datos del Arcano Mayor. Esta única extracción representa tu trayectoria actual dentro del plano espectral. Consulta los glifos. Interpreta las advertencias. La supervivencia es incierta.",
            deckInterface: "MAZO ETÉRICO (ARCANO MAYOR)",
            deckDesc: "Haz clic en la carta espectral para obtener tu eco de datos actual.",
            drawCardEngage: "EXTRAER GLIFO [ENGANCHE]",
            readoutComplete: "PROYECCIÓN COMPLETA:",
            reversedPosition: ":: SEÑAL CORRUPTA ::",
            uprightPosition: ":: ECO ETÉRICO ::",
            systemError: "CORRUPCIÓN DEL SISTEMA/MANIFESTACIÓN",
            holographicInterpretation: "INTERPRETACIÓN ETÉRICA",
            coreData: "ATRIBUTOS DEL GLIFO CENTRAL:",
            reInitiate: "RE-INICIAR CANALIZACIÓN",
            dataArchives: "ARCHIVOS DE DATOS: MAJOR ARCANA GLYPHS",
            selectNode: "Selecciona un glifo de la cuadrícula a continuación para ver su especificación espectral completa.",
            dataCorruption: "CORRUPCIÓN DE DATOS",
            cardNotFound: "Datos del glifo solicitado no encontrados en el archivo.",
            viewFullSpec: "VER ESPECIFICACIÓN COMPLETA",
            closeSpec: "[CERRAR ESPEC]",
            uprightTitle: "ECO ETÉRICO (Interpretado):",
            reversedTitle: "SEÑAL CORRUPTA (Manifestación/Advertencia):",
            qrScanner: "ESCÁNER_QR",
            qrScannerTitle: "ESCÁNER DE SEÑAL QR",
            qrScannerDesc: "Active el escáner óptico para decodificar señales QR de la Red-Espectral.",
            qrPositionCode: "Coloque el código QR dentro del marco del escáner",
            qrActivateScanner: "ACTIVAR ESCÁNER [ENGANCHE]",
            qrCloseScanner: "[TERMINAR ESCANEO]",
            qrDetected: "SEÑAL DETECTADA",
            qrCameraError: "ACCESO A CÁMARA DENEGADO",
            qrCameraErrorMsg: "Acceso al escáner óptico denegado o no disponible. Verifique los permisos del sistema.",

            // Card Data (Spanish - kept consistent)
            MAJOR_ARCANA: [
                { id: 0, name: "EL LOCO", title: "EL FALLO", meaningUp: "Un comienzo imprudente, potencial ilimitado, código intacto. Estás fuera del sistema.", meaningRev: "Error del sistema, autosabotaje, programación ingenua. Estás desconectado de la red.", keywords: ["Nuevos Comienzos", "Inocencia", "Riesgo"] },
                { id: 1, name: "EL MAGO", title: "EL CODIFICADOR", meaningUp: "Dominio de recursos, intención enfocada, control total de la matriz. La manifestación está en línea.", meaningRev: "Manipulación, habilidad no aprovechada, corrupción de datos. Tu fuente de energía está fuera de línea.", keywords: ["Habilidad", "Acción", "Enfoque"] },
                { id: 2, name: "LA SUMA SACERDOTISA", title: "EL ORÁCULO", meaningUp: "Intuición, conocimiento oculto, observación pasiva. Confía en el núcleo interno de IA.", meaningRev: "Secretos revelados, falta de enfoque, intuición bloqueada. El cortafuegos es demasiado fuerte.", keywords: ["Misterio", "Intuición", "Subconsciente"] },
                { id: 3, name: "LA EMPERATRIZ", title: "LA MEGA-CIUDAD", meaningUp: "Abundancia, nutrición, creatividad, lujo. La vida prospera en las calles de neón.", meaningRev: "Dependencia, exceso de indulgencia, bloqueo creativo. La contaminación de la ciudad es abrumadora.", keywords: ["Fertilidad", "Belleza", "Maternidad"] },
                { id: 4, name: "EL EMPERADOR", title: "LA RED", meaningUp: "Autoridad, estructura, control, estabilidad. La cuadrícula es estable y predecible.", meaningRev: "Dominación, rigidez, ego descontrolado. La red es demasiado opresiva.", keywords: ["Poder", "Estructura", "Disciplina"] },
                { id: 5, name: "EL SUMO SACERDOTE", title: "EL LÍDER DE SECTA", meaningUp: "Conformidad, tradición, guía espiritual del viejo mundo. Siguiendo el protocolo establecido.", meaningRev: "Rebeldía, inconformidad, desafío a la autoridad. Rompiendo las reglas obsoletas.", keywords: ["Tradición", "Creencias", "Educación"] },
                { id: 8, name: "LA FUERZA", title: "EL CIBORG", meaningUp: "Coraje, fuerza interior, dominio sobre el deseo. Integración perfecta de carne y máquina.", meaningRev: "Debilidad, duda, falta de control. Rechazando tu yo aumentado.", keywords: ["Valentía", "Compasión", "Paciencia"] },
                { id: 10, name: "RUEDA DE LA FORTUNA", title: "EL ALGORITMO", meaningUp: "Cambio, destino, fortuna repentina. El bucle de la suerte ha sido activado.", meaningRev: "Mala suerte, ciclos que terminan, resistencia al cambio. Atascado en un bucle de código recurrente.", keywords: ["Destino", "Ciclos", "Suerte"] },
                { id: 13, name: "LA MUERTE", title: "EL REINICIO", meaningUp: "Fin de un ciclo, transformación, cambio profundo. Reinicio de sistema necesario.", meaningRev: "Resistencia al cambio, estancamiento, miedo a lo desconocido. Rechazando la actualización del sistema.", keywords: ["Final", "Transición", "Eliminación"] },
                { id: 16, name: "LA TORRE", title: "EL COLAPSO DEL SISTEMA", meaningUp: "Cambio repentino, fallo catastrófico, revelación de mentiras. La cuadrícula se colapsa.", meaningRev: "Evitar el desastre, miedo al sufrimiento, destrucción retrasada. Un error silencioso y purulento.", keywords: ["Caos", "Ruina", "Cambio Repentino"] },
            ]
        }
    };

    // --- STATE MANAGEMENT ---
    let state = {
        view: 'home',
        currentCard: null,
        isReversed: false,
        userHash: '', // Store the user's hash
        // Initialize language from local storage or default to 'en'
        language: localStorage.getItem('cyberOracleLang') || 'en', 
    };

    const root = document.getElementById('app-root');

    // --- CARD SVG GENERATION ---
    
    /**
        * Generates the Cyberpunk-themed SVG icon for a given card ID.
        * @param {number} id - The ID of the card (0, 1, 2, etc.)
        * @param {boolean} isSmall - If true, generates a smaller, condensed SVG.
        * @returns {string} The SVG markup.
        */
    function getCardSvg(id, isSmall = false) {
        const sizeClass = isSmall ? 'card-svg-small' : 'card-svg-large';
        // Use eerie green as the stroke/fill color for the SVG
        const style = isSmall ? 'stroke-violet-400 stroke-[4] neon-svg-fill' : 'stroke-green-400 stroke-[5] neon-svg-fill';
        
        let svgContent = '';

        switch (id) {
            case 0: // THE FOOL (THE GLITCH)
                // Broken circle (world) with a single error line through it
                svgContent = `
                    <circle cx="50" cy="50" r="45" fill="none" stroke-dasharray="10 5"/>
                    <line x1="10" y1="50" y2="50" x2="90" stroke-width="8"/>
                    <path d="M 40 30 L 60 70 M 60 30 L 40 70" stroke-width="4" stroke="currentColor"/>
                `;
                break;
            case 1: // THE MAGICIAN (THE CODER)
                // Hand reaching for a floating data cube
                svgContent = `
                    <path d="M 50 10 L 65 30 L 35 30 Z" fill="currentColor"/>
                    <rect x="40" y="70" width="20" height="20" fill="currentColor"/>
                    <line x1="50" y1="40" x2="50" y2="70" stroke-width="4" stroke="currentColor"/>
                    <path d="M 30 70 C 20 80, 20 90, 30 90" fill="none" stroke-width="4" stroke="currentColor"/>
                    <path d="M 70 70 C 80 80, 80 90, 70 90" fill="none" stroke-width="4" stroke="currentColor"/>
                `;
                break;
            case 2: // THE HIGH PRIESTESS (THE ORACLE)
                // Stylized eye with data streams (V.I.)
                svgContent = `
                    <path d="M 10 50 C 30 20, 70 20, 90 50 C 70 80, 30 80, 10 50 Z" fill="none" stroke="currentColor" stroke-width="4"/>
                    <circle cx="50" cy="50" r="10" fill="currentColor"/>
                    <line x1="50" y1="10" x2="50" y2="35" stroke-width="3" stroke="currentColor"/>
                    <line x1="50" y1="65" x2="50" y2="90" stroke-width="3" stroke="currentColor"/>
                `;
                break;
            case 3: // THE EMPRESS (THE MEGA-CITY)
                // Layered city skyline
                svgContent = `
                    <rect x="5" y="60" width="90" height="35" fill="currentColor"/>
                    <rect x="15" y="40" width="30" height="20" fill="#0d0d14" stroke="currentColor" stroke-width="3"/>
                    <rect x="55" y="20" width="30" height="40" fill="#0d0d14" stroke="currentColor" stroke-width="3"/>
                    <line x1="60" y1="55" x2="80" y2="55" stroke="currentColor" stroke-width="2"/>
                    <line x1="60" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="2"/>
                `;
                break;
            case 4: // THE EMPEROR (THE NETWORK)
                // Central processor unit (CPU)
                svgContent = `
                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" stroke-width="4"/>
                    <rect x="30" y="30" width="40" height="40" fill="currentColor"/>
                    <line x1="20" y1="50" x2="0" y2="50" stroke-width="4" stroke="currentColor"/>
                    <line x1="80" y1="50" x2="100" y2="50" stroke-width="4" stroke="currentColor"/>
                    <line x1="50" y1="20" x2="50" y2="0" stroke-width="4" stroke="currentColor"/>
                    <line x1="50" y1="80" x2="50" y2="100" stroke-width="4" stroke="currentColor"/>
                `;
                break;
            case 5: // THE HIEROPHANT (THE SECT LEADER)
                // Crossed keys (security/tradition)
                svgContent = `
                    <rect x="25" y="5" width="10" height="50" fill="currentColor"/>
                    <circle cx="20" cy="70" r="10" fill="none" stroke="currentColor" stroke-width="4"/>
                    <rect x="45" y="30" width="50" height="10" fill="currentColor" transform="rotate(45 50 50)"/>
                    <rect x="45" y="55" width="50" height="10" fill="currentColor" transform="rotate(135 50 50)"/>
                `;
                break;
            case 8: // STRENGTH (THE CYBORG)
                // Bionic arm/circuit muscle
                svgContent = `
                    <path d="M 20 80 C 40 60, 60 60, 80 80" fill="none" stroke="currentColor" stroke-width="6"/>
                    <path d="M 30 80 L 30 90 L 70 90 L 70 80" fill="currentColor"/>
                    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="4"/>
                    <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" stroke-width="2"/>
                    <line x1="35" y1="50" x2="65" y2="50" stroke="currentColor" stroke-width="2"/>
                `;
                break;
            case 10: // WHEEL OF FORTUNE (THE ALGORITHM)
                // Spinning Gear / Flux
                svgContent = `
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="4"/>
                    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" stroke-width="2"/>
                    <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" stroke-width="2"/>
                    <path d="M 50 10 L 60 20 L 40 20 Z" fill="currentColor"/>
                    <path d="M 50 90 L 60 80 L 40 80 Z" fill="currentColor" transform="rotate(180 50 50)"/>
                    <rect x="10" y="40" width="20" height="20" fill="currentColor" transform="rotate(-90 20 50)"/>
                    <rect x="70" y="40" width="20" height="20" fill="currentColor" transform="rotate(90 80 50)"/>
                `;
                break;
            case 13: // DEATH (THE REBOOT)
                // Power symbol / broken mask
                svgContent = `
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="6"/>
                    <line x1="50" y1="20" x2="50" y2="50" stroke="currentColor" stroke-width="6"/>
                    <line x1="35" y1="65" x2="65" y2="65" stroke="currentColor" stroke-width="4"/>
                    <line x1="45" y1="75" x2="55" y2="75" stroke="currentColor" stroke-width="4"/>
                `;
                break;
            case 16: // THE TOWER (THE SYSTEM CRASH)
                // Lightning bolt striking a block
                svgContent = `
                    <rect x="30" y="50" width="40" height="40" fill="currentColor"/>
                    <line x1="50" y1="10" x2="40" y2="40" stroke="currentColor" stroke-width="5"/>
                    <line x1="40" y1="40" x2="60" y2="40" stroke="currentColor" stroke-width="5"/>
                    <line x1="60" y1="40" x2="50" y2="70" stroke="currentColor" stroke-width="5"/>
                    <path d="M 40 50 L 60 50" stroke="red" stroke-width="2"/>
                    <path d="M 40 60 L 60 60" stroke="red" stroke-width="2"/>
                `;
                break;
            default:
                // Default fallback
                svgContent = `<text x="50%" y="50%" font-size="12" text-anchor="middle" fill="currentColor">NO DATA</text>`;
        }

        return `
            <svg viewBox="0 0 100 100" class="${sizeClass} ${style} bg-gray-900 rounded-lg p-2" preserveAspectRatio="xMidYMid meet">
                ${svgContent}
            </svg>
        `;
    }

    // Custom SVG for the Card Back
    const cardBackSvg = `
        <svg viewBox="0 0 100 160" class="card-svg-large stroke-violet-500 stroke-[3] neon-svg-fill bg-gray-900 rounded-lg p-4" preserveAspectRatio="xMidYMid meet">
            <rect x="10" y="10" width="80" height="140" fill="none" stroke-dasharray="10 5"/>
            <text x="50" y="75" font-size="10" fill="#8800FF" text-anchor="middle" font-weight="bold">SPECTRAL DECK</text>
            <text x="50" y="90" font-size="8" fill="#00FF88" text-anchor="middle">[ SIGNAL VOID ]</text>
            <path d="M 50 10 L 50 150 M 10 80 L 90 80" stroke="#8800FF" stroke-width="1"/>
        </svg>
    `;

    // --- TRANSLATION FUNCTION ---
    function t(key, lang = state.language) {
        // Allows accessing nested data (like MAJOR_ARCANA) or simple UI keys
        const parts = key.split('.');
        let current = translations[lang];

        for (const part of parts) {
            if (current && current[part] !== undefined) {
                current = current[part];
            } else {
                // Fallback to English if translation is missing
                const fallback = translations['en'];
                let fallbackCurrent = fallback;
                for (const fallbackPart of parts) {
                        if (fallbackCurrent && fallbackCurrent[fallbackPart] !== undefined) {
                            fallbackCurrent = fallbackCurrent[fallbackPart];
                        } else {
                            return key;
                        }
                }
                return fallbackCurrent;
            }
        }
        return current;
    }

    // --- LANGUAGE CONTROL ---
    function setLanguage(newLang) {
        if (state.language !== newLang) {
            state.language = newLang;
            localStorage.setItem('cyberOracleLang', newLang);
            updateNavBarText(); // Update navigation text
            handleRoute();      // Rerender current view
        }
    }

    function updateNavBarText() {
        document.getElementById('app-title-nav').textContent = t('appName');
        document.getElementById('language-select').value = state.language;
        
        document.getElementById('nav-text-homeNode').textContent = t('homeNode');
        document.getElementById('nav-text-startReading').textContent = t('startReading');
        document.getElementById('nav-text-cardIndex').textContent = t('cardIndex');
        document.getElementById('nav-text-qrScanner').textContent = t('qrScanner'); // ADD THIS
    }

    // --- HELPER FUNCTIONS ---

    // Seeded random number generator
    function seededRandom(seed) {
        // Simple hash function to convert string to number
        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            const char = seed.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        
        // Use the hash as seed for a pseudo-random generator
        const x = Math.sin(hash) * 10000;
        return x - Math.floor(x);
    }

    function showModal(titleKey, content) {
        document.getElementById('modal-title').innerText = t(titleKey);
        document.getElementById('modal-content').innerText = content;
        document.getElementById('app-modal').querySelector('button').innerText = t('acknowledge');
        document.getElementById('app-modal').classList.remove('hidden');
    }

    function hideModal() {
        document.getElementById('app-modal').classList.add('hidden');
    }

    // QR Scanner Variables
    let qrStream = null;
    let qrScanInterval = null;

    function renderQRScanner() {
        root.innerHTML = `
            <div class="card-panel p-8 rounded-xl w-full max-w-2xl">
                <h2 class="text-3xl font-extrabold mb-4 neon-text text-center">${t('qrScannerTitle')}</h2>
                <p class="text-gray-400 mb-6 text-sm text-center">${t('qrScannerDesc')}</p>
                
                <div id="qr-video-container" class="hidden">
                    <div class="relative bg-black rounded-lg overflow-hidden mb-4" style="aspect-ratio: 4/3;">
                        <video id="qr-video" class="w-full h-full object-cover" autoplay playsinline></video>
                        <canvas id="qr-canvas" class="hidden"></canvas>
                        
                        <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div class="relative w-64 h-64 border-2 border-green-400 rounded-lg">
                                <div class="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-violet-400"></div>
                                <div class="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-violet-400"></div>
                                <div class="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-violet-400"></div>
                                <div class="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-violet-400"></div>
                                <div class="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent scanning-line"></div>
                            </div>
                        </div>
                    </div>
                    <p class="text-center text-green-400 text-sm mb-4">${t('qrPositionCode')}</p>
                    <div id="qr-result" class="hidden p-4 bg-gray-800 border border-green-400 rounded-lg mb-4">
                        <p class="text-green-400 font-mono text-sm" id="qr-result-text"></p>
                    </div>
                    <button onclick="stopQRScanner()" class="w-full neon-btn py-3 px-6 rounded-lg">
                        ${t('qrCloseScanner')}
                    </button>
                </div>
                
                <div id="qr-start-container">
                    <button onclick="startQRScanner()" class="w-full neon-btn py-3 px-6 rounded-lg">
                        ${t('qrActivateScanner')}
                    </button>
                </div>
            </div>
        `;
    }

    function startQRScanner() {
        console.log('Starting QR Scanner...');
        console.log('jsQR available:', typeof jsQR !== 'undefined');
        
        document.getElementById('qr-start-container').classList.add('hidden');
        document.getElementById('qr-video-container').classList.remove('hidden');
        
        const video = document.getElementById('qr-video');
        const canvas = document.getElementById('qr-canvas');
        const ctx = canvas.getContext('2d');
        
        navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: 'environment',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            } 
        })
        .then(stream => {
            console.log('Camera stream obtained');
            qrStream = stream;
            video.srcObject = stream;
            
            video.addEventListener('loadedmetadata', () => {
                console.log('Video metadata loaded:', video.videoWidth, 'x', video.videoHeight);
            });
            
            video.play();
            
            let scanAttempts = 0;
            qrScanInterval = setInterval(() => {
                scanAttempts++;
                if (video.readyState === video.HAVE_ENOUGH_DATA && typeof jsQR !== 'undefined') {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    
                    const code = jsQR(imageData.data, imageData.width, imageData.height);
                    
                    if (code) {
                        console.log('QR CODE FOUND:', code.data);
                        handleQRDetected(code.data);
                    }
                    
                    // Log every 10 attempts
                    if (scanAttempts % 10 === 0) {
                        console.log('Scan attempts:', scanAttempts, 'Video size:', canvas.width, 'x', canvas.height);
                    }
                }
            }, 250);
        })
        .catch(err => {
            console.error('Camera error:', err);
            showModal('qrCameraError', t('qrCameraErrorMsg'));
            document.getElementById('qr-video-container').classList.add('hidden');
            document.getElementById('qr-start-container').classList.remove('hidden');
        });
    }

    function stopQRScanner() {
        if (qrStream) {
            qrStream.getTracks().forEach(track => track.stop());
            qrStream = null;
        }
        if (qrScanInterval) {
            clearInterval(qrScanInterval);
            qrScanInterval = null;
        }
        window.location.hash = '#home';
    }

    function handleQRDetected(data) {
        console.log('handleQRDetected called with:', data);
        
        if (qrScanInterval) {
            clearInterval(qrScanInterval);
            qrScanInterval = null;
        }
        
        const resultDiv = document.getElementById('qr-result');
        const resultText = document.getElementById('qr-result-text');
        resultText.textContent = `${t('qrDetected')}: ${data}`;
        resultDiv.classList.remove('hidden');
        
        // Store the hash in state
        state.userHash = data;
        console.log('Set state.userHash to:', state.userHash);
        
        // Auto-navigate to reading view after 2 seconds
        setTimeout(() => {
            stopQRScanner();
            window.location.hash = '#reading';
            handleRoute(); // Make sure to call handleRoute to render
        }, 2000);
    }

    // --- VIEW RENDERING LOGIC ---

    function renderHome() {
        root.innerHTML = `
            <div class="card-panel p-8 rounded-xl w-full max-w-4xl text-center">
                <h1 class="text-4xl md:text-6xl font-extrabold mb-4 neon-text">${t('appName')}</h1>
                <p class="text-xl text-violet-400 mb-8">${t('accessFuture')}</p>
                
                <div class="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
                    <a href="#reading" class="neon-btn py-3 px-8 text-lg rounded-lg">
                        ${t('initiateReadout')}
                    </a>
                    <a href="#index" class="neon-btn py-3 px-8 text-lg rounded-lg border-violet-500 text-violet-500 hover:border-green-400 hover:text-green-400">
                        ${t('viewArchives')}
                    </a>
                </div>
                
                <div class="mt-10 border-t border-green-400/50 pt-6">
                    <h2 class="text-2xl font-bold mb-3 neon-text text-left">${t('protocol')}</h2>
                    <p class="text-sm text-gray-400 text-left">
                        ${t('protocolDesc')}
                    </p>
                </div>
            </div>
        `;
    }

    async function callExternalApi(userHash,meaning) {
        if (!userHash || userHash.trim() === '') {
        showModal('systemMessage', 'Please enter a hash value to receive your reading.');
        return;
        }

        const apiUrl = `${WORKER_URL}/?hash=${userHash}&meaning=${meaning}`;
    
        try {
        // 1. Make the request
        const response = await fetch(apiUrl);
    
        // 2. Check if the request was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        // 3. Parse the JSON response body
        const data = await response.json();
    
        // 4. Handle the retrieved data
        console.log('API Data:', data);
        const readingEl = document.getElementById('reading');
        if (readingEl) {
            readingEl.innerText = data.reading + ' ' + data.firstUsedMessage;
        }
        } catch (error) {
        // 5. Handle any network errors or failed parsing
        console.error('There was a problem with the fetch operation:', error);
        showModal('systemMessage', 'Error connecting to the Ghost-Net. Please try again.');
        }
    }

    function renderReading() {
        let content;
        if (state.currentCard) {
            // Display the revealed card
            const card = state.currentCard;
            const isReversed = state.isReversed;
            const meaning = isReversed ? card.meaningRev : card.meaningUp;
            const positionText = isReversed ? t('reversedPosition') : t('uprightPosition');
            const titleText = isReversed ? t('systemError') : t('holographicInterpretation');
            const cardSvg = getCardSvg(card.id, false);

            content = `
                <div class="card-panel p-8 rounded-xl w-full max-w-4xl animate-reveal">
                    <h2 class="text-3xl font-extrabold mb-6 neon-text text-center border-b border-violet-500/50 pb-3">${t('readoutComplete')} ${card.name} / ${card.title}</h2>
                    
                    <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                        
                        <!-- Card Image -->
                        <div class="flex-shrink-0 relative">
                            <div class="transform ${isReversed ? 'rotate-180' : 'rotate-0'} transition-transform duration-500 ease-in-out">
                                ${cardSvg}
                            </div>
                            <p class="text-center text-sm font-bold mt-2 text-violet-400">${positionText}</p>
                        </div>

                        <!-- Card Interpretation -->
                        <div class="flex-grow">
                            <h3 class="text-xl font-bold mb-3 neon-text">${titleText}</h3>
                            <p class="text-gray-300 mb-6 text-sm md:text-base break-words">${meaning}</p>
                            
                            <!-- Display the hash used -->
                            <div class="mb-4 p-3 bg-gray-800/50 rounded border border-violet-500/30">
                                <p class="text-xs text-violet-400 mb-1">PAYMENT CONFIRMATION NUMBER:</p>
                                <input 
                                    type="text" 
                                    id="hash-input-display" 
                                    value="${state.userHash}" 
                                    readonly
                                    class="w-full bg-gray-900 text-green-400 border border-green-500/50 rounded px-2 py-1 text-xs font-mono"
                                />
                            </div>
                            
                            <p class="text-gray-300 mb-6 text-sm md:text-base break-words" id="reading"></p>
                            
                            <h3 class="text-lg font-bold mt-4 neon-text border-t border-green-400/50 pt-4">${t('coreData')}</h3>
                            <div class="flex flex-wrap gap-2 break-words">
                                ${card.keywords.map(keyword => 
                                    `<span class="text-sm bg-green-800/30 text-green-300 px-3 py-1 rounded-full border border-green-600">${keyword}</span>`
                                ).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 pt-4 border-t border-violet-500/50 text-center">
                        <button onclick="clearReading()" class="neon-btn py-2 px-6 text-lg rounded-lg">
                            ${t('reInitiate')}
                        </button>
                    </div>
                </div>
            `;

        } else { 
            const hashValue = state.userHash || '';
            // Deck Interface (Initial view)
            content = `
                <div class="card-panel p-8 rounded-xl w-full max-w-lg text-center">
                    <h2 class="text-3xl font-extrabold mb-4 neon-text">${t('deckInterface')}</h2>
                    <p class="text-gray-400 mb-8 text-sm">${t('deckDesc')}</p>
                    
                    <div class="flex flex-col items-center">
                        <div class="w-40 h-64 mb-8 cursor-pointer hover:scale-[1.02] transition duration-300" onclick="drawCard()">
                            ${cardBackSvg}
                        </div>
                        
                        <div class="w-full max-w-md mb-6">
                            <label for="hash-input" class="block text-sm font-bold text-violet-400 mb-2">ENTER PAYMENT CONFIRMATION NUMBER:</label>
                            <input 
                                type="text" 
                                id="hash-input" 
                                placeholder="Input hash sequence..." 
                                value="${hashValue}"
                                class="w-full bg-gray-800 text-green-400 border border-violet-500 rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 focus:border-green-400 font-mono"
                            />                        
                            <p class="text-gray-400 mb-8 text-sm">(If you lie about paying, the cards will lie too)</p>
                        </div>
                        
                        <button onclick="drawCard()" class="neon-btn py-3 px-8 text-lg rounded-lg">
                            ${t('drawCardEngage')}
                        </button>
                    </div>
                </div>
            `;
        }
        root.innerHTML = content;
        
        // Call API with the hash from the input field if a card was drawn
        if (state.currentCard) {
            const card = state.currentCard;
            const isReversed = state.isReversed;
            const meaning = isReversed ? card.meaningRev : card.meaningUp;
            const hashInput = document.getElementById('hash-input-display');
            if (hashInput) {
                const userHash = hashInput.value.trim();
                if (userHash) {
                    callExternalApi(userHash, meaning);
                }
            }
        }
    }

    function drawCard() {
        // Get hash from input field
        const hashInput = document.getElementById('hash-input');
        const userHash = hashInput ? hashInput.value.trim() : '';
        
        if (!userHash) {
            showModal('systemMessage', 'Please enter a hash code before drawing a card.');
            return;
        }
        
        // Store the hash in state for later use
        state.userHash = userHash;
        
        const arcana = t('MAJOR_ARCANA');
        
        // Use seeded random based on hash for card selection
        const randomValue = seededRandom(userHash);
        const randomIndex = Math.floor(randomValue * arcana.length);
        state.currentCard = arcana[randomIndex];
        
        // Use seeded random for reversed determination (second seed)
        const reversedValue = seededRandom(userHash + '_reversed');
        state.isReversed = reversedValue < 0.5;

        // Rerender the reading view
        renderReading();
    }

    function clearReading() {
        state.currentCard = null;
        state.isReversed = false;
        state.userHash = ''; // Clear the hash when resetting
        renderReading();
    }


    function renderIndex() {
        const arcana = t('MAJOR_ARCANA');
        console.log('renderIndex', arcana);
        const selectedCardId = state.view.split('/')[1];
        let detailsContent = '';

        // Handle card details view if an ID is present
        if (selectedCardId !== undefined) {
            const card = arcana.find(c => c.id.toString() === selectedCardId);
            if (card) {
                const cardSvg = getCardSvg(card.id, false);
                detailsContent = `
                    <div class="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center p-4">
                        <div class="card-panel p-8 rounded-xl w-full max-w-4xl lg:max-w-5xl overflow-y-auto max-h-[90vh]">
                            <h2 class="text-3xl font-extrabold mb-6 neon-text text-center border-b border-green-400/50 pb-3">${card.name} // ${card.title} [NODE ${card.id}]</h2>
                            
                            <div class="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                                
                                <!-- Card Image -->
                                <div class="flex-shrink-0 w-full md:w-auto flex justify-center">
                                    <div class="w-40 h-64">
                                        ${cardSvg}
                                    </div>
                                </div>

                                <!-- Full Data Spec -->
                                <div class="flex-grow">
                                    <h3 class="text-xl font-bold mb-2 text-green-400">${t('coreData')}</h3>
                                    <div class="flex flex-wrap gap-2 mb-6 break-words">
                                        ${card.keywords.map(keyword => 
                                            `<span class="text-sm bg-green-800/30 text-green-300 px-3 py-1 rounded-full border border-green-600">${keyword}</span>`
                                        ).join('')}
                                    </div>
                                    
                                    <h3 class="text-xl font-bold mb-2 text-violet-400 border-t border-violet-500/50 pt-4">${t('uprightTitle')}</h3>
                                    <p class="text-gray-300 mb-4 text-sm break-words">${card.meaningUp}</p>

                                    <h3 class="text-xl font-bold mb-2 text-violet-400 border-t border-violet-500/50 pt-4">${t('reversedTitle')}</h3>
                                    <p class="text-gray-300 text-sm break-words">${card.meaningRev}</p>
                                </div>
                            </div>

                            <div class="mt-8 pt-4 border-t border-violet-500/50 text-center">
                                <button onclick="window.location.hash='#index'; handleRoute()" class="neon-btn py-2 px-6 text-lg rounded-lg">
                                    ${t('closeSpec')}
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                showModal('systemMessage', t('cardNotFound'));
                // Fallback to main index view
                window.location.hash='#index'; 
                setTimeout(handleRoute, 100);
            }
        }


        // Main Index Grid View
        const gridItems = arcana.map(card => `
            <div class="card-panel p-4 rounded-lg text-center hover:shadow-green-400/50 hover:shadow-xl transition duration-300 cursor-pointer" onclick="window.location.hash='#index/${card.id}'; handleRoute()">
                <div class="flex justify-center mb-2">
                    <div class="w-24 h-40">
                        ${getCardSvg(card.id, true)}
                    </div>
                </div>
                <p class="text-xs font-bold text-violet-400">${card.name}</p>
                <p class="text-sm font-extrabold neon-text">${card.title}</p>
                <button class="text-xs mt-2 text-green-400 hover:text-green-200">${t('viewFullSpec')}</button>
            </div>
        `).join('');

        root.innerHTML = `
            <div class="card-panel p-6 sm:p-8 rounded-xl w-full max-w-7xl">
                <h2 class="text-3xl font-extrabold mb-4 neon-text text-center border-b border-violet-500/50 pb-3">${t('dataArchives')}</h2>
                <p class="text-gray-400 mb-8 text-sm text-center">${t('selectNode')}</p>
                
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    ${gridItems}
                </div>
            </div>
            ${detailsContent}
        `;
    }

    // --- ROUTING LOGIC ---

    function handleRoute() {
        const hash = window.location.hash.substring(1) || 'home';
        
        // Add this new case:
        if (hash === 'scanner') {
            state.view = 'scanner';
            renderQRScanner();
        } else if (hash.startsWith('index')) {
            state.view = hash;
            renderIndex();
        } else if (hash === 'reading') {
            state.view = 'reading';
            renderReading();
        } else {
            state.view = 'home';
            renderHome();
        }
        updateNavBarText();
    }

    // --- INITIALIZATION ---

    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('resize', updateNavBarText); // Re-check nav bar text on resize
    
    // Initial setup
    document.addEventListener('DOMContentLoaded', () => {
        // Set initial language in the selector
        document.getElementById('language-select').value = state.language;
        handleRoute();
    });