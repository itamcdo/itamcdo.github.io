// Animação ao scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-animate]');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const positionFromTop = el.getBoundingClientRect().top;
    if (positionFromTop - windowHeight <= -100) {
      el.classList.add('show');
    }
  });
}

// Inicializa animações
function initAnimations() {
  animateOnScroll();
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', initAnimations);
