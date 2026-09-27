const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function updateDarkModeButtonText() {
    if (body.classList.contains('light-mode')) {
        darkModeToggle.textContent = '🌙 Dark Mode';
    } else {
        darkModeToggle.textContent = '☀️ Light Mode';
    }
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    updateDarkModeButtonText();
});

// Remove mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});