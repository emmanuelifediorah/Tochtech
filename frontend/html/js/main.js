  // Mobile Menu Toggle
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-menu').classList.remove('active');
            });
        });

        // Particles.js Configuration
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 700 } },
                color: { value: "#fff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 4, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#fff",
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3.7,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: true
                }
            },
            // interactivity: {
            //     detect_on: "canvas",
            //     events: {
            //         onhover: { enable: false, mode: "repulse" },
            //         onclick: { enable: false, mode: "push" },
            //         resize: true
            //     }
            // },
            retina_detect: true
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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