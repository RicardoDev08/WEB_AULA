function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.85)';
    }
});

document.addEventListener('click', function(e) {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target) && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
    }
});

function animateMenu() {
    const menuBars = document.querySelectorAll('.menu-btn div');
    menuBars.forEach(bar => bar.classList.toggle('animate'));
}

document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(item => {
        if(item.href === currentLocation) {
            item.classList.add('active');
        }
    });
});

let isMenuTransitioning = false;

document.querySelector('.menu-btn').addEventListener('click', function(e) {
    if (!isMenuTransitioning) {
        isMenuTransitioning = true;
        toggleMenu();
        animateMenu();
        
        setTimeout(() => {
            isMenuTransitioning = false;
        }, 300); 
    }
    e.stopPropagation();
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-element').forEach(element => {
    observer.observe(element);
});