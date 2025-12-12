// script.js

// Simple interaction example
console.log("Portfolio Loaded Successfully!");

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        alert("JS is connected!");

    });
});