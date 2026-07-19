// ==========================================================================
// BASE DE DATOS DE LOS 100 MOTIVOS
// ==========================================================================
const reasons = [
    // --- TUS DETALLES (Detalles únicos de Denisse) ---
    {
        id: 1,
        text: "Porque no tomas cualquier agua, solo Dasani, y me encanta saber ese tipo de detalles únicos sobre ti.",
        category: "detalles"
    },
    {
        id: 2,
        text: "Porque eres firme con tus decisiones, como tu regla de no tomar cola y cuidar de ti misma a tu manera.",
        category: "detalles"
    },
    {
        id: 3,
        text: "Porque me fascina ver cómo se te ilumina la cara de felicidad cada vez que salimos a comer sushi.",
        category: "detalles"
    },
    {
        id: 4,
        text: "Porque cuando sales a bailar brillas con una luz propia que me enamora cada vez más.",
        category: "detalles"
    },
    {
        id: 5,
        text: "Porque hacer karaoke contigo es uno de los momentos más divertidos y felices de mi vida.",
        category: "detalles"
    },
    {
        id: 6,
        text: "Porque cantas a todo pulmón las canciones de Karol G y ver tu energía me llena el alma.",
        category: "detalles"
    },
    {
        id: 7,
        text: "Porque cantas 'Boyfriend' de Big Time Rush con el corazón y me recuerda a tu lado más dulce y espontáneo.",
        category: "detalles"
    },
    {
        id: 8,
        text: "Por la forma tan tierna en que arrugas la nariz cuando algo te da risa.",
        category: "detalles"
    },
    {
        id: 9,
        text: "Porque eres la persona con el corazón más noble, dispuesta a ayudar siempre a quienes quieres.",
        category: "detalles"
    },
    {
        id: 10,
        text: "Por tu risa contagiosa, esa que es capaz de cambiar por completo el rumbo de mi día.",
        category: "detalles"
    },
    {
        id: 11,
        text: "Porque eres extremadamente inteligente y admiro tu capacidad para resolver cualquier reto.",
        category: "detalles"
    },
    {
        id: 12,
        text: "Por tu mirada, que con un solo pestañeo es capaz de hacerme sentir en paz.",
        category: "detalles"
    },
    {
        id: 13,
        text: "Porque eres una mujer trabajadora y luchadora, que no se rinde ante ninguna adversidad.",
        category: "detalles"
    },
    {
        id: 14,
        text: "Por el olor de tu perfume que se queda impregnado en mis abrigos favoritos.",
        category: "detalles"
    },
    {
        id: 15,
        text: "Porque tienes un gusto impecable para todo, desde cómo te vistes hasta las cosas que te apasionan.",
        category: "detalles"
    },
    {
        id: 16,
        text: "Por la forma en que buscas mi mano de forma natural cuando estamos caminando juntos.",
        category: "detalles"
    },
    {
        id: 17,
        text: "Por tu paciencia inigualable (especialmente conmigo cuando me pongo difícil).",
        category: "detalles"
    },
    {
        id: 18,
        text: "Por la manera en que te preocupas de que descanse bien y coma a mis horas.",
        category: "detalles"
    },
    {
        id: 19,
        text: "Porque tus abrazos son el único refugio donde los problemas del mundo exterior desaparecen por completo.",
        category: "detalles"
    },
    {
        id: 20,
        text: "Por cómo me miras cuando crees que no me doy cuenta.",
        category: "detalles"
    },
    {
        id: 21,
        text: "Porque eres mi cable a tierra y la persona que me motiva a ser una mejor versión de mí mismo.",
        category: "detalles"
    },
    {
        id: 22,
        text: "Por tu voz, que es el sonido más dulce y reconfortante cuando he tenido un día agotador.",
        category: "detalles"
    },
    {
        id: 23,
        text: "Porque defiendes tus opiniones con una pasión y una fuerza que me parecen sumamente atractivas.",
        category: "detalles"
    },
    {
        id: 24,
        text: "Por la ternura inmensa con la que tratas a los animales y la naturaleza.",
        category: "detalles"
    },
    {
        id: 25,
        text: "Por tu cabello, que me encanta acariciar y enredar entre mis dedos mientras descansamos.",
        category: "detalles"
    },
    {
        id: 26,
        text: "Porque eres auténtica, sin filtros y con una personalidad única que nadie podría imitar.",
        category: "detalles"
    },
    {
        id: 27,
        text: "Por tus mensajes de buenos días que hacen que empiece la jornada con una sonrisa.",
        category: "detalles"
    },
    {
        id: 28,
        text: "Por la manera tan hermosa en que te queda la ropa de color lila.",
        category: "detalles"
    },
    {
        id: 29,
        text: "Porque me conoces tanto que sabes exactamente lo que estoy pensando con solo mirarme.",
        category: "detalles"
    },
    {
        id: 30,
        text: "Porque tienes la maravillosa habilidad de hacerme reír incluso cuando estoy molesto.",
        category: "detalles"
    },

    // --- NUESTROS MOMENTOS ---
    {
        id: 31,
        text: "Por nuestro viaje juntos al lago de montaña, donde el frío no importaba porque nos teníamos el uno al otro.",
        category: "momentos"
    },
    {
        id: 32,
        text: "Por la noche inolvidable en que nos besamos bajo las luces brillantes de la ciudad.",
        category: "momentos"
    },
    {
        id: 33,
        text: "Por cada foto graciosa e improvisada que nos tomamos y que guardo como mi mayor tesoro.",
        category: "momentos"
    },
    {
        id: 34,
        text: "Por esa noche frente al edificio con luces moradas, sintiendo que la ciudad entera celebraba nuestro amor.",
        category: "momentos"
    },
    {
        id: 35,
        text: "Por todas las veces que nos hemos abrazado fuerte bajo la lluvia sintiéndonos invencibles.",
        category: "momentos"
    },
    {
        id: 36,
        text: "Por los desayunos compartidos y las pláticas largas de madrugada que componen nuestra historia.",
        category: "momentos"
    },
    {
        id: 37,
        text: "Por las tardes tranquilas donde no hacemos nada, pero el simple hecho de estar juntos es perfecto.",
        category: "momentos"
    },
    {
        id: 38,
        text: "Por cada 17 de mes que hemos cumplido y por la promesa de que vendrán muchísimos más.",
        category: "momentos"
    },
    {
        id: 39,
        text: "Por la primera vez que me dijiste 'te amo' y cómo mi corazón se aceleró como nunca.",
        category: "momentos"
    },
    {
        id: 40,
        text: "Por los viajes en auto escuchando música de Big Time Rush a todo volumen.",
        category: "momentos"
    },
    {
        id: 41,
        text: "Por todas las veces que nos hemos apoyado mutuamente en nuestros momentos más difíciles.",
        category: "momentos"
    },
    {
        id: 42,
        text: "Por los secretos que solo compartimos nosotros dos y que nadie más entendería.",
        category: "momentos"
    },
    {
        id: 43,
        text: "Por los chistes locales que tenemos y que nos hacen reír en medio de cualquier silencio.",
        category: "momentos"
    },
    {
        id: 44,
        text: "Por la complicidad que sentimos cuando estamos en una reunión y nos buscamos con la mirada.",
        category: "momentos"
    },
    {
        id: 45,
        text: "Por las locuras y ocurrencias de última hora que siempre resultan en recuerdos increíbles.",
        category: "momentos"
    },
    {
        id: 46,
        text: "Por esa primera cita en la que estaba nervioso y tú lograste que me sintiera como en casa.",
        category: "momentos"
    },
    {
        id: 47,
        text: "Por las noches de películas en las que terminamos hablando de la vida en vez de ver la pantalla.",
        category: "momentos"
    },
    {
        id: 48,
        text: "Por la forma en que superamos los obstáculos del pasado y cómo nos fortaleció como pareja.",
        category: "momentos"
    },
    {
        id: 49,
        text: "Por cada abrazo por la espalda mientras estás distraída haciendo algo.",
        category: "momentos"
    },
    {
        id: 50,
        text: "Por los paseos a pie tomados de la mano, explorando nuevos lugares juntos.",
        category: "momentos"
    },
    {
        id: 51,
        text: "Por las llamadas interminables cuando no podíamos vernos, acortando cualquier distancia.",
        category: "momentos"
    },
    {
        id: 52,
        text: "Por los planes improvisados de comer sushi a mitad de semana para celebrar cualquier pequeña victoria.",
        category: "momentos"
    },
    {
        id: 53,
        text: "Por tus audios de voz largos contándome tu día, los cuales escucho más de una vez.",
        category: "momentos"
    },
    {
        id: 54,
        text: "Por cada beso en la frente que me das y que me hace sentir inmensamente protegido.",
        category: "momentos"
    },
    {
        id: 55,
        text: "Por cómo cantamos 'TQG' o 'Provenza' de Karol G sintiéndonos los mejores artistas del planeta.",
        category: "momentos"
    },
    {
        id: 56,
        text: "Por las promesas que nos hicimos mirando las estrellas y que poco a poco vamos cumpliendo.",
        category: "momentos"
    },
    {
        id: 57,
        text: "Por las sonrisas tontas que se nos escapan cuando nos quedamos mirándonos fijamente.",
        category: "momentos"
    },
    {
        id: 58,
        text: "Por los días fríos en los que nos acurrucamos bajo una manta compartiendo el calor.",
        category: "momentos"
    },
    {
        id: 59,
        text: "Por haberte convertido, sin planearlo, en mi persona favorita en todo el universo.",
        category: "momentos"
    },
    {
        id: 60,
        text: "Por cada pequeña tradición que hemos creado juntos y que define nuestra relación.",
        category: "momentos"
    },
    {
        id: 61,
        text: "Por las fotos tontas que nos enviamos durante el día para recordarnos que nos extrañamos.",
        category: "momentos"
    },
    {
        id: 62,
        text: "Por esa sensación inigualable de paz que me inunda cuando te veo llegar.",
        category: "momentos"
    },
    {
        id: 63,
        text: "Por todos los obstáculos que hemos aprendido a esquivar juntos como un verdadero equipo.",
        category: "momentos"
    },
    {
        id: 64,
        text: "Por los helados y postres que compartimos a escondidas de la dieta.",
        category: "momentos"
    },
    {
        id: 65,
        text: "Por ser mi refugio seguro en este mundo tan caótico.",
        category: "momentos"
    },

    // --- MIS PROMESAS ---
    {
        id: 66,
        text: "Prometo esforzarme cada día para escucharte mejor y comprender tus sentimientos.",
        category: "promesas"
    },
    {
        id: 67,
        text: "Prometo tener siempre una botella fría de agua Dasani lista para ti cuando nos veamos.",
        category: "promesas"
    },
    {
        id: 68,
        text: "Prometo ser tu compañero eterno de baile, acompañando tus pasos sin importar el ritmo.",
        category: "promesas"
    },
    {
        id: 69,
        text: "Prometo cantar contigo en todos los karaokes futuros, aunque mis cuerdas vocales no colaboren.",
        category: "promesas"
    },
    {
        id: 70,
        text: "Prometo llevarte a comer sushi siempre que quieras celebrar, o simplemente cuando tengas antojo.",
        category: "promesas"
    },
    {
        id: 71,
        text: "Prometo aprender de mis errores y cambiar las actitudes que nos hagan daño.",
        category: "promesas"
    },
    {
        id: 72,
        text: "Prometo respetar tu espacio, tus metas y tus sueños individuales, apoyándote para que los alcances.",
        category: "promesas"
    },
    {
        id: 73,
        text: "Prometo recordarte lo hermosa e inteligente que eres todos los días del año.",
        category: "promesas"
    },
    {
        id: 74,
        text: "Prometo ser la persona en la que siempre puedas confiar plenamente, sin temor a ser juzgada.",
        category: "promesas"
    },
    {
        id: 75,
        text: "Prometo cuidar de nuestra relación con el mismo amor y dedicación del primer día.",
        category: "promesas"
    },
    {
        id: 76,
        text: "Prometo buscar siempre soluciones en vez de culpables cuando tengamos un desacuerdo.",
        category: "promesas"
    },
    {
        id: 77,
        text: "Prometo no soltar tu mano nunca, ni siquiera cuando el camino se ponga empinado.",
        category: "promesas"
    },
    {
        id: 78,
        text: "Prometo crear contigo un hogar lleno de risas, comprensión y mucha paz.",
        category: "promesas"
    },
    {
        id: 79,
        text: "Prometo acompañarte a los conciertos de Karol G y cantar 'Mañana Será Bonito' a tu lado.",
        category: "promesas"
    },
    {
        id: 80,
        text: "Prometo ser tu mayor fan en cada uno de tus proyectos y metas profesionales.",
        category: "promesas"
    },
    {
        id: 81,
        text: "Prometo sorprenderte de vez en cuando con pequeños detalles que te hagan sonreír.",
        category: "promesas"
    },
    {
        id: 82,
        text: "Prometo no dar por sentado tu amor y ganarme tu corazón cada nuevo amanecer.",
        category: "promesas"
    },
    {
        id: 83,
        text: "Prometo abrazarte muy fuerte cuando tengas un mal día y quedarme en silencio si es lo que necesitas.",
        category: "promesas"
    },
    {
        id: 84,
        text: "Prometo que cada 17 de mes nos esforzaremos en hacer algo especial para recordar lo lejos que hemos llegado.",
        category: "promesas"
    },
    {
        id: 85,
        text: "Prometo elegirte a ti, una y otra vez, por encima de cualquier dificultad.",
        category: "promesas"
    },
    {
        id: 86,
        text: "Prometo recordar siempre por qué empezamos y el amor tan inmenso que nos une.",
        category: "promesas"
    },
    {
        id: 87,
        text: "Prometo ser tu paz en la tormenta y tu refugio en la adversidad.",
        category: "promesas"
    },
    {
        id: 88,
        text: "Prometo defender nuestro amor ante cualquier circunstancia y proteger lo que construimos.",
        category: "promesas"
    },
    {
        id: 89,
        text: "Prometo no dejar que la rutina apague la magia y la locura de lo nuestro.",
        category: "promesas"
    },
    {
        id: 90,
        text: "Prometo recordarte siempre que, para mí, eres la mujer más perfecta sobre la tierra.",
        category: "promesas"
    },
    {
        id: 91,
        text: "Prometo que trabajaremos juntos para que siempre te sientas libre, plena y feliz a mi lado.",
        category: "promesas"
    },
    {
        id: 92,
        text: "Prometo ser paciente con tus procesos y apoyarte incondicionalmente en tus decisiones.",
        category: "promesas"
    },
    {
        id: 93,
        text: "Prometo darte besos suaves cuando estés dormida para que sientas mi amor hasta en tus sueños.",
        category: "promesas"
    },
    {
        id: 94,
        text: "Prometo que celebraremos juntos cada logro profesional y personal que alcances.",
        category: "promesas"
    },
    {
        id: 95,
        text: "Prometo que seguiremos riéndonos de las tonterías más simples cuando seamos viejitos.",
        category: "promesas"
    },
    {
        id: 96,
        text: "Prometo ser el hombro sobre el que puedas llorar cuando el mundo exterior sea demasiado pesado.",
        category: "promesas"
    },
    {
        id: 97,
        text: "Prometo que buscaremos aventuras nuevas para seguir asombrándonos de la vida juntos.",
        category: "promesas"
    },
    {
        id: 98,
        text: "Prometo amarte sin condiciones, aceptándote tal cual eres y valorando cada parte de ti.",
        category: "promesas"
    },
    {
        id: 99,
        text: "Prometo que haré todo lo que esté en mis manos para que nunca dudes de lo mucho que te amo.",
        category: "promesas"
    },
    {
        id: 100,
        text: "Prometo seguir intentándolo hoy, mañana y todos los días de nuestra vida, porque eres mi principio y mi fin. Te amo, Denisse.",
        category: "promesas"
    }
];

// ==========================================================================
// INICIALIZACIÓN Y EVENTOS DEL DOM
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Inicializaciones
    initFloatingHearts();
    initCursorTrail();
    initClickExplosion();
    initEnvelope();
    initCountdown();
    initGallery();
    initReasonsSection();
    initSurpriseModal();
    initMusicPlayer();
});

// ==========================================================================
// 1. CORAZONES FLOTANTES DE FONDO
// ==========================================================================
function initFloatingHearts() {
    const container = document.getElementById("hearts-container");
    const heartSymbols = ["♥", "💜", "💕", "🌸", "✨"];
    const maxHearts = 20;

    for (let i = 0; i < maxHearts; i++) {
        createHeart(true); // Crear corazones iniciales distribuidos
    }

    // Seguir generando de forma continua
    setInterval(() => {
        if (container.childElementCount < maxHearts + 10) {
            createHeart(false);
        }
    }, 1500);

    function createHeart(isInitial) {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Estilos aleatorios
        const startX = Math.random() * 100;
        const duration = 6 + Math.random() * 8; // 6s a 14s
        const size = 0.8 + Math.random() * 1.5; // 0.8rem a 2.3rem
        const opacity = 0.3 + Math.random() * 0.4; // 0.3 a 0.7

        heart.style.left = `${startX}vw`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.fontSize = `${size}rem`;
        heart.style.opacity = opacity;

        if (isInitial) {
            // Distribuir el retraso inicial para que no salgan todos a la vez
            const delay = -Math.random() * duration;
            heart.style.animationDelay = `${delay}s`;
        }

        container.appendChild(heart);

        // Eliminar después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
}

// ==========================================================================
// 2. RASTRO DEL CURSOR DE RATÓN
// ==========================================================================
function initCursorTrail() {
    let lastMouseX = 0;
    let lastMouseY = 0;
    const distanceThreshold = 40; // Distancia mínima para generar otro corazón

    document.addEventListener("mousemove", (e) => {
        const distance = Math.hypot(e.pageX - lastMouseX, e.pageY - lastMouseY);
        
        if (distance > distanceThreshold) {
            createTrailHeart(e.pageX, e.pageY);
            lastMouseX = e.pageX;
            lastMouseY = e.pageY;
        }
    });

    function createTrailHeart(x, y) {
        const heart = document.createElement("span");
        heart.classList.add("trail-heart");
        heart.innerText = "♥";
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        
        // Tonalidad lila aleatoria
        const lilaHue = 260 + Math.random() * 30; // 260 a 290
        heart.style.color = `hsl(${lilaHue}, 85%, 80%)`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

// ==========================================================================
// 3. EXPLOSIÓN DE CORAZONES AL HACER CLIC
// ==========================================================================
function initClickExplosion() {
    document.addEventListener("click", (e) => {
        // Ignorar si se hace clic en elementos interactivos que tienen su propio modal
        if (
            e.target.closest("button") || 
            e.target.closest("input") || 
            e.target.closest(".polaroid-card") || 
            e.target.closest("#envelope") ||
            e.target.closest(".music-player") ||
            e.target.closest(".lightbox") ||
            e.target.closest(".surprise-modal-card")
        ) {
            return;
        }

        const numParticles = 8 + Math.floor(Math.random() * 8); // 8 a 16 partículas
        const symbols = ["♥", "💜", "💕", "✨"];

        for (let i = 0; i < numParticles; i++) {
            createParticle(e.pageX, e.pageY);
        }

        function createParticle(x, y) {
            const p = document.createElement("span");
            p.classList.add("click-heart");
            p.innerText = symbols[Math.floor(Math.random() * symbols.length)];
            
            // Destino aleatorio en un círculo alrededor del clic
            const angle = Math.random() * Math.PI * 2;
            const distance = 40 + Math.random() * 80; // Radio de explosión
            const xDest = Math.cos(angle) * distance;
            const yDest = Math.sin(angle) * distance;
            const rotation = Math.random() * 360;

            p.style.left = `${x}px`;
            p.style.top = `${y}px`;
            p.style.setProperty("--x-dest", `${xDest}px`);
            p.style.setProperty("--y-dest", `${yDest}px`);
            p.style.setProperty("--rot", `${rotation}deg`);

            // Escala y color lila/rosa
            const scale = 0.5 + Math.random() * 0.8;
            p.style.transform = `translate(-50%, -50%) scale(${scale})`;
            
            const randomColor = Math.random() > 0.5 ? "var(--dark-lila)" : "var(--primary-lila)";
            p.style.color = randomColor;

            document.body.appendChild(p);

            setTimeout(() => {
                p.remove();
            }, 800);
        }
    });
}

// ==========================================================================
// 4. SOBRE DE CARTA INTERACTIVO
// ==========================================================================
function initEnvelope() {
    const envelope = document.getElementById("envelope");
    
    envelope.addEventListener("click", (e) => {
        // Detener propagación para evitar disparar la explosión de clics en el mismo punto
        e.stopPropagation();
        envelope.classList.toggle("open");
    });
}

// ==========================================================================
// 5. CUENTA REGRESIVA DE ANIVERSARIO (LOS 17 DE CADA MES)
// ==========================================================================
function initCountdown() {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const messageEl = document.getElementById("countdown-message");

    function updateTimer() {
        const now = new Date();
        let targetYear = now.getFullYear();
        let targetMonth = now.getMonth(); // 0-indexed (0 = Enero, 6 = Julio)
        
        // El aniversario es el día 17
        let targetDate = new Date(targetYear, targetMonth, 17, 0, 0, 0);

        // Si ya pasó el 17 de este mes, apuntamos al 17 del próximo mes
        if (now.getDate() > 17 || (now.getDate() === 17 && now.getHours() >= 0)) {
            targetMonth += 1;
            if (targetMonth > 11) {
                targetMonth = 0;
                targetYear += 1;
            }
            targetDate = new Date(targetYear, targetMonth, 17, 0, 0, 0);
        }

        const diffMs = targetDate - now;

        // Si es exactamente el día 17
        if (now.getDate() === 17) {
            daysEl.innerText = "00";
            hoursEl.innerText = "00";
            minutesEl.innerText = "00";
            secondsEl.innerText = "00";
            messageEl.innerText = "¡Feliz Cumple Mes mi amor! Hoy es 17, un día para celebrar nuestro amor ♥";
            return;
        }

        // Cálculos
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

        // Renderizar con padding de ceros
        daysEl.innerText = String(days).padStart(2, '0');
        hoursEl.innerText = String(hours).padStart(2, '0');
        minutesEl.innerText = String(minutes).padStart(2, '0');
        secondsEl.innerText = String(seconds).padStart(2, '0');
        
        messageEl.innerText = "¡Cada mes a tu lado es mi mejor regalo!";
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// ==========================================================================
// 6. GALERÍA DE FOTOS E INTERACCIÓN LIGHTBOX
// ==========================================================================
function initGallery() {
    const cards = document.querySelectorAll(".polaroid-card");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxClose = document.getElementById("lightbox-close");

    // Pies de foto específicos para el lightbox (más amplios y cariñosos)
    const detailedCaptions = {
        1: "Bajo las luces de la ciudad, donde el mundo se detiene y solo existimos tú y yo. Es mi foto favorita porque expresa lo mágico que es tenerte cerca.",
        2: "Mirando al horizonte juntos frente al lago. Sé que no hay montaña lo suficientemente alta ni tormenta que no podamos superar si estamos tomados de la mano.",
        3: "Tus ojos y tu sonrisa iluminan hasta mis noches más oscuras. Cada selfie a tu lado guarda la alegría pura de compartir la vida contigo.",
        4: "En tu abrazo encuentro mi verdadero lugar seguro. Donde el frío desaparece y todo se vuelve paz y felicidad instantánea.",
        5: "Cada momento contigo está lleno de color y complicidad. Me encanta vernos sonreír frente a ese edificio iluminado de nuestro color preferido."
    };

    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.stopPropagation();
            const index = card.getAttribute("data-index");
            const img = card.querySelector("img");
            
            lightboxImg.src = img.src;
            lightboxCaption.innerText = detailedCaptions[index] || img.alt;
            lightbox.classList.add("active");
        });
    });

    // Cerrar lightbox
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", closeLightbox);

    function closeLightbox() {
        lightbox.classList.remove("active");
    }
}

// ==========================================================================
// 7. SECCIÓN DE MOTIVOS (RENDERIZAR, BUSCAR Y FILTRAR)
// ==========================================================================
let activeCategory = "all";
let searchQuery = "";

function initReasonsSection() {
    const grid = document.getElementById("reasons-grid");
    const searchInput = document.getElementById("search-input");
    const tabBtns = document.querySelectorAll(".tab-btn");

    // Escuchar búsqueda
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderReasons();
    });

    // Escuchar tabs de categoría
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            renderReasons();
        });
    });

    // Carga inicial
    renderReasons();
}

function renderReasons() {
    const grid = document.getElementById("reasons-grid");
    const countEl = document.getElementById("reasons-count");
    grid.innerHTML = "";

    // Filtrar motivos
    const filtered = reasons.filter(reason => {
        const matchesCategory = (activeCategory === "all" || reason.category === activeCategory);
        const matchesSearch = reason.text.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    // Mostrar mensaje si no hay resultados
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; opacity: 0.7;">
                <p style="font-size: 1.1rem; font-weight: 600;">No encontré ningún motivo con esa palabra...</p>
                <p style="font-size: 0.9rem; margin-top: 5px;">¡Pero recuerda que te amo en cada una de las 100 formas escritas aquí!</p>
            </div>
        `;
        countEl.innerText = "Mostrando 0 motivos";
        return;
    }

    // Renderizar tarjetas
    filtered.forEach(reason => {
        const card = document.createElement("div");
        card.classList.add("reason-card");
        card.innerHTML = `
            <div class="reason-num">#${reason.id}</div>
            <p class="reason-text">${highlightSearchTerms(reason.text, searchQuery)}</p>
        `;
        grid.appendChild(card);
    });

    countEl.innerText = `Mostrando ${filtered.length} ${filtered.length === 1 ? 'motivo' : 'motivos'}`;
}

// Resaltar términos buscados en el texto
function highlightSearchTerms(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return text.replace(regex, `<mark style="background: #e9d5ff; color: #4a375a; border-radius: 3px; padding: 0 3px;">$1</mark>`);
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ==========================================================================
// 8. GENERADOR DE MOTIVO SORPRESA (MODAL ALEATORIO)
// ==========================================================================
function initSurpriseModal() {
    const surpriseBtn = document.getElementById("surprise-btn");
    const modal = document.getElementById("surprise-modal");
    const modalClose = document.getElementById("surprise-close");
    const modalNum = document.getElementById("surprise-num");
    const modalText = document.getElementById("surprise-text");
    const modalAgainBtn = document.getElementById("surprise-again-btn");

    surpriseBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showRandomReason();
    });

    modalAgainBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        showRandomReason();
    });

    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    function showRandomReason() {
        const randomIndex = Math.floor(Math.random() * reasons.length);
        const reason = reasons[randomIndex];

        modalNum.innerText = `#${reason.id}`;
        modalText.innerText = reason.text;
        modal.classList.add("active");
        
        // Crear pequeña explosión de confeti-corazones en el centro del modal
        const rect = modal.getBoundingClientRect();
        createHeartExplosion(window.innerWidth / 2, window.innerHeight / 2);
    }

    function closeModal() {
        modal.classList.remove("active");
    }

    function createHeartExplosion(x, y) {
        const symbols = ["♥", "💜", "💕", "✨"];
        for (let i = 0; i < 20; i++) {
            const p = document.createElement("span");
            p.classList.add("click-heart");
            p.innerText = symbols[Math.floor(Math.random() * symbols.length)];
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 80 + Math.random() * 150; 
            const xDest = Math.cos(angle) * distance;
            const yDest = Math.sin(angle) * distance;
            const rotation = Math.random() * 360;

            p.style.left = `${x}px`;
            p.style.top = `${y}px`;
            p.style.setProperty("--x-dest", `${xDest}px`);
            p.style.setProperty("--y-dest", `${yDest}px`);
            p.style.setProperty("--rot", `${rotation}deg`);

            const scale = 0.6 + Math.random() * 1;
            p.style.transform = `translate(-50%, -50%) scale(${scale})`;
            p.style.color = Math.random() > 0.5 ? "var(--dark-lila)" : "var(--primary-lila)";

            document.body.appendChild(p);

            setTimeout(() => {
                p.remove();
            }, 800);
        }
    }
}

// ==========================================================================
// 9. REPRODUCTOR DE MÚSICA
// ==========================================================================
function initMusicPlayer() {
    const musicBtn = document.getElementById("music-btn");
    const audio = document.getElementById("romantic-music");
    const statusText = musicBtn.querySelector(".music-status");
    let isPlaying = false;

    musicBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (isPlaying) {
            audio.pause();
            musicBtn.classList.remove("playing");
            statusText.innerText = "OFF";
        } else {
            audio.play().then(() => {
                musicBtn.classList.add("playing");
                statusText.innerText = "ON";
            }).catch(error => {
                console.log("Error al reproducir audio: ", error);
            });
        }
        isPlaying = !isPlaying;
    });
}
