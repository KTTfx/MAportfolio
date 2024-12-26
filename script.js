// Enhanced Typed.js Animation
document.addEventListener('DOMContentLoaded', function() {
    const typedOptions = {
        strings: [
            'Writing & Storytelling',
            'Project Management',
            'Mental Health Advocacy',
            'Digital Innovation',
            'Community Building'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: '⚡',
        onStringTyped: (arrayPos, self) => {
            // Add a glitch effect when string is typed
            const element = self.el;
            element.classList.add('glitch-flash');
            setTimeout(() => element.classList.remove('glitch-flash'), 100);
        }
    };
    
    new Typed('#typed-text', typedOptions);
});

// Advanced Glitch Text Effect
class GlitchText {
    constructor(element) {
        this.element = element;
        this.originalText = element.textContent;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }

    start() {
        this.interval = setInterval(this.update, 50);
        setTimeout(() => this.stop(), 200);
    }

    stop() {
        clearInterval(this.interval);
        this.element.textContent = this.originalText;
    }

    update() {
        const text = this.originalText.split('');
        for(let i = 0; i < 3; i++) {
            const pos = Math.floor(Math.random() * this.originalText.length);
            text[pos] = this.chars[Math.floor(Math.random() * this.chars.length)];
        }
        this.element.textContent = text.join('');
    }
}

// Initialize Glitch Effect on Headings
document.querySelectorAll('.glitch-text').forEach(element => {
    const glitch = new GlitchText(element);
    element.addEventListener('mouseover', () => glitch.start());
});

// Enhanced ScrollReveal with Custom Easing
const srConfig = {
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    interval: 100,
    opacity: 0,
    origin: 'bottom',
    rotate: { x: 10, y: 10, z: 0 },
    scale: 0.9,
    cleanup: true,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.2,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
};

// Initialize Enhanced ScrollReveal
const sr = ScrollReveal();

// Hero Section Animation
sr.reveal('.hero-content', {
    ...srConfig,
    delay: 200,
    distance: '100px',
    origin: 'top'
});

// Skills Animation with Stagger Effect
sr.reveal('.skills-item', {
    ...srConfig,
    interval: 200,
    beforeReveal: (element) => {
        element.style.transformOrigin = 'left';
    }
});

// Portfolio Items Animation
sr.reveal('.portfolio-item', {
    ...srConfig,
    interval: 150,
    scale: 0.85,
    beforeReveal: (element) => {
        element.style.transformOrigin = 'center';
    }
});

// Story Blocks Animation
sr.reveal('.story-block', {
    ...srConfig,
    origin: 'left',
    interval: 300,
    distance: '100px',
    scale: 1
});

// Interactive Particle System
const particleConfig = {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 }
        },
        color: { value: '#e056fd' },
        shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#e056fd',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
};

// Initialize Particles
particlesJS('particles-js', particleConfig);

// Enhanced Progress Bar Animation
const animateProgressBars = () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const value = bar.getAttribute('data-value');
        if (isInViewport(bar) && !bar.classList.contains('animated')) {
            bar.style.width = `${value}%`;
            bar.classList.add('animated');
            
            // Add counter animation
            const counter = document.createElement('span');
            counter.classList.add('progress-counter');
            bar.appendChild(counter);
            
            let count = 0;
            const interval = setInterval(() => {
                count++;
                counter.textContent = `${count}%`;
                if (count >= value) clearInterval(interval);
            }, 20);
        }
    });
};

// Smooth Parallax Effect
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax');
            
            parallaxElements.forEach(element => {
                const speed = element.getAttribute('data-speed') || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            ticking = false;
        });
        ticking = true;
    }
});

// Interactive Cursor Effect
class CustomCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        document.body.appendChild(this.cursor);
        
        this.cursor.style.opacity = '0';
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('mousemove', e => {
            this.cursor.style.opacity = '1';
            this.cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        document.addEventListener('mouseout', () => {
            this.cursor.style.opacity = '0';
        });

        // Hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .portfolio-item');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-expanded');
            });
            
            element.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-expanded');
            });
        });
    }
}

// Initialize Custom Cursor
new CustomCursor();

// Utility Functions
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Enhanced Portfolio Filter with Animations
const portfolioFilter = (() => {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');
    
    const animate = (element, animation) => {
        return new Promise(resolve => {
            element.style.animation = animation;
            element.addEventListener('animationend', () => {
                element.style.animation = '';
                resolve();
            }, { once: true });
        });
    };
    
    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items with animation
            for (const item of items) {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    await animate(item, 'fadeOut 0.3s forwards');
                    item.style.display = 'block';
                    await animate(item, 'fadeIn 0.3s forwards');
                } else {
                    await animate(item, 'fadeOut 0.3s forwards');
                    item.style.display = 'none';
                }
            }
        });
    });
})();

// Screenshot Prevention
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    // Prevent PrintScreen
    if (e.key === 'PrintScreen') {
        e.preventDefault();
        return false;
    }

    // Prevent Ctrl+P (Print)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
    }

    // Prevent Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
    }

    // Prevent Ctrl+Shift+C (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
    }

    // Prevent Ctrl+S (Save)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }

    // Prevent Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
    }
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Mobile Screenshot Prevention
document.addEventListener('DOMContentLoaded', function() {
    // Detect mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Create watermark overlay
        const watermark = document.createElement('div');
        watermark.className = 'mobile-watermark';
        document.body.appendChild(watermark);

        // Handle visibility change (when user switches apps or takes screenshot)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                // Blur content when app is in background
                document.body.classList.add('content-hidden');
            } else {
                document.body.classList.remove('content-hidden');
            }
        });

        // Prevent touch selection
        document.addEventListener('touchstart', function(e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });

        // Prevent zoom
        document.addEventListener('touchmove', function(e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });

        // Add timestamp to detect screenshots
        let lastTime = Date.now();
        setInterval(() => {
            const watermarkText = document.createElement('div');
            watermarkText.className = 'watermark-text';
            watermarkText.textContent = new Date().toISOString();
            
            // Remove old timestamp
            const oldText = document.querySelector('.watermark-text');
            if (oldText) {
                oldText.remove();
            }
            
            watermark.appendChild(watermarkText);
            lastTime = Date.now();
        }, 100);
    }
});

// Prevent iOS text selection
document.addEventListener('touchstart', function(e) {
    e.preventDefault();
}, { passive: false });

// Initialize all animations on load
window.addEventListener('load', () => {
    animateProgressBars();
    document.body.classList.add('loaded');
});

// Update animations on scroll
window.addEventListener('scroll', () => {
    animateProgressBars();
    requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        document.documentElement.style.setProperty('--scroll', `${scrolled}px`);
    });
});
