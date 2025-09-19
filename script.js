// Smooth scrolling for navigation links
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

// Form submission handling
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add some CSS for animation (this could be moved to CSS file)
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    section.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if needed in the future)
const nav = document.querySelector('nav ul');
const navToggle = document.createElement('button');
navToggle.textContent = '☰';
navToggle.style.display = 'none';
navToggle.style.background = 'none';
navToggle.style.border = 'none';
navToggle.style.fontSize = '1.5rem';
navToggle.style.cursor = 'pointer';

document.querySelector('nav').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

if (window.innerWidth <= 768) {
    navToggle.style.display = 'block';
    nav.style.display = 'none';
    nav.classList.add('mobile-menu');
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block';
        nav.style.display = 'none';
    } else {
        navToggle.style.display = 'none';
        nav.style.display = 'flex';
    }
});
