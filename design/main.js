document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const count = +stat.innerText;
            const increment = target / 100;
            
            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(animateStats, 20);
            } else {
                stat.innerText = target;
            }
        });
    }
    
    // Start animation when the element is in viewport
    const heroSection = document.querySelector('.hero');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateStats();
        }
    });
    
    observer.observe(heroSection);
    
    // Country Info on Map
    const pulsePoints = document.querySelectorAll('.pulse-point');
    const countryInfo = document.getElementById('country-info');
    
    pulsePoints.forEach(point => {
        point.addEventListener('mouseenter', function() {
            const country = this.getAttribute('data-country');
            let countryDetails = '';
            
            switch(country) {
                case 'Maroc':
                    countryDetails = `
                        <h3>Maroc</h3>
                        <p>Pays hôte de la Coupe du Monde 2030</p>
                        <p><i class="fas fa-stadium"></i> Stades: 6</p>
                        <p><i class="fas fa-city"></i> Villes: 5</p>
                    `;
                    break;
                case 'Espagne':
                    countryDetails = `
                        <h3>Espagne</h3>
                        <p>Pays hôte de la Coupe du Monde 2030</p>
                        <p><i class="fas fa-stadium"></i> Stades: 8</p>
                        <p><i class="fas fa-city"></i> Villes: 7</p>
                    `;
                    break;
                case 'Portugal':
                    countryDetails = `
                        <h3>Portugal</h3>
                        <p>Pays hôte de la Coupe du Monde 2030</p>
                        <p><i class="fas fa-stadium"></i> Stades: 4</p>
                        <p><i class="fas fa-city"></i> Villes: 3</p>
                    `;
                    break;
                default:
                    countryDetails = `
                        <h3>Pays Hôte</h3>
                        <p>Information non disponible</p>
                    `;
            }
            
            countryInfo.innerHTML = countryDetails;
        });
    });
    
    // Destination Slider
    const destinationSlider = document.querySelector('.destination-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const destinationCards = document.querySelectorAll('.destination-card');
    let currentIndex = 0;
    
    // Hide all cards except the first three
    function updateSlider() {
        destinationCards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + 3) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Initialize slider
    updateSlider();
    
    // Next button click
    nextBtn.addEventListener('click', function() {
        if (currentIndex < destinationCards.length - 3) {
            currentIndex++;
            updateSlider();
        }
    });
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    // Download App Modal
    const downloadLinks = document.querySelectorAll('a[href="#telecharger"]');
    const downloadModal = document.querySelector('.download-app-modal');
    const closeModal = document.querySelector('.close-modal');
    
    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            downloadModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        downloadModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === downloadModal) {
            downloadModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]:not([href="#telecharger"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});