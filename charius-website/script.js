// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const newsletterForm = document.querySelector('.newsletter-form');
if(newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if(email) {
            // Here you would typically send the data to a server
            alert(`Thank you for subscribing with email: ${email}`);
            emailInput.value = '';
        }
    });
}

// Animate progress bars when they come into view
const progressBars = document.querySelectorAll('.progress-fill');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
        
        if(isVisible && !bar.classList.contains('animated')) {
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = width;
                bar.classList.add('animated');
            }, 300);
        }
    });
};

// Initial check on page load
window.addEventListener('load', animateProgressBars);
// Check on scroll
window.addEventListener('scroll', animateProgressBars);

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if(window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});