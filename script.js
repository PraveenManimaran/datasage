// Enhanced interactions and animations for DataSage landing page

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Button hover effects and click animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.position = 'absolute';
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Enhanced particle animation
    function createFloatingParticles() {
        const visualization = document.querySelector('.data-visualization');
        if (!visualization) return;

        const particles = [];
        const particleCount = 15;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = `hsl(${220 + Math.random() * 60}, 70%, 60%)`;
            particle.style.borderRadius = '50%';
            particle.style.opacity = Math.random() * 0.5 + 0.3;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.pointerEvents = 'none';
            particle.style.filter = 'blur(0.5px)';
            
            visualization.appendChild(particle);
            particles.push({
                element: particle,
                x: Math.random() * 100,
                y: Math.random() * 100,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }

        function animateParticles() {
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off edges
                if (particle.x <= 0 || particle.x >= 100) particle.vx *= -1;
                if (particle.y <= 0 || particle.y >= 100) particle.vy *= -1;

                // Keep in bounds
                particle.x = Math.max(0, Math.min(100, particle.x));
                particle.y = Math.max(0, Math.min(100, particle.y));

                particle.element.style.left = particle.x + '%';
                particle.element.style.top = particle.y + '%';
            });

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .hero-content, .data-visualization');
    animatedElements.forEach(el => observer.observe(el));

    // Parallax effect for hero section
    function parallaxEffect() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        const particles = document.querySelectorAll('.particle');
        
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
        }

        particles.forEach((particle, index) => {
            const speed = 0.05 + (index * 0.01);
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }

    // Throttled scroll handler
    let ticking = false;
    function scrollHandler() {
        if (!ticking) {
            requestAnimationFrame(() => {
                parallaxEffect();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', scrollHandler);

    // Header background opacity on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (document.body.classList.contains('dark-mode') || document.body.classList.contains('high-contrast')) {
            // Keep solid backgrounds in dark/high-contrast modes
            return;
        }
        const scrolled = window.pageYOffset;
        const opacity = Math.min(scrolled / 100, 1);
        header.style.background = `rgba(255, 255, 255, ${0.95 + (opacity * 0.05)})`;
    });

    // Feature cards hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

            // Button action handlers - all redirect to dashboard in demo mode
    const startAnalyzingBtn = document.querySelector('.hero-buttons .btn-primary');
    const getStartedBtn = document.querySelector('.nav .btn-primary');

    if (startAnalyzingBtn) {
        startAnalyzingBtn.addEventListener('click', function() {
            // Set demo mode
            localStorage.setItem('isGuest', 'true');
            
            // Simulate loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<span>Loading...</span>';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                // Redirect to dashboard after loading
                window.location.href = 'dashboard.html';
            }, 1500);
        });
    }

    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            // Set demo mode
            localStorage.setItem('isGuest', 'true');
            
            // Simulate loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<span>Loading...</span>';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                // Redirect to dashboard
                window.location.href = 'dashboard.html';
            }, 1000);
        });
    }

    // Initialize floating particles
    setTimeout(createFloatingParticles, 1000);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Performance optimization: reduce animations on low-powered devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
    }
});

// CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .keyboard-navigation *:focus {
        outline: 2px solid #4f46e5;
        outline-offset: 2px;
    }

    .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

    .floating-particle {
        transition: all 0.1s ease-out;
    }
`;
document.head.appendChild(style);

// Theme toggles and persistence (shared with dashboard)
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;

    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.classList.add('active');
        darkModeToggle.innerHTML = '☀️';
        localStorage.setItem('darkMode', 'true');
    } else {
        darkModeToggle.classList.remove('active');
        darkModeToggle.innerHTML = '🌙';
        localStorage.setItem('darkMode', 'false');
    }
}

function toggleHighContrast() {
    const body = document.body;
    const contrastToggle = document.getElementById('contrastToggle');
    if (!contrastToggle) return;

    body.classList.toggle('high-contrast');
    if (body.classList.contains('high-contrast')) {
        contrastToggle.classList.add('active');
        contrastToggle.innerHTML = '⚪';
        localStorage.setItem('highContrast', 'true');
    } else {
        contrastToggle.classList.remove('active');
        contrastToggle.innerHTML = '⚫';
        localStorage.setItem('highContrast', 'false');
    }
}

function initializeAccessibilitySettings() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const highContrast = localStorage.getItem('highContrast') === 'true';

    if (darkMode) {
        document.body.classList.add('dark-mode');
        const darkToggle = document.getElementById('darkModeToggle');
        if (darkToggle) {
            darkToggle.classList.add('active');
            darkToggle.innerHTML = '☀️';
        }
    }

    if (highContrast) {
        document.body.classList.add('high-contrast');
        const contrastToggle = document.getElementById('contrastToggle');
        if (contrastToggle) {
            contrastToggle.classList.add('active');
            contrastToggle.innerHTML = '⚪';
        }
    }
}

// Initialize theme on load (after DOM ready handlers run)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAccessibilitySettings);
} else {
    initializeAccessibilitySettings();
}
