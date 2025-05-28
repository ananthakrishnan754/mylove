// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Modal functionality
const modal = document.getElementById('proposalModal');
const proposeButton = document.getElementById('proposeButton');
const closeModalButton = document.getElementById('closeModalButton');

proposeButton.onclick = function() {
    modal.style.display = "block";
}

closeModalButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle mobile viewport height
function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setViewportHeight();
window.addEventListener('resize', setViewportHeight);
