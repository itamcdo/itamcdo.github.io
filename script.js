// ==========================
// Animação de elementos ao scroll
// ==========================
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

// ==========================
// Animação das barras de skills
// ==========================
function animateSkills() {
  const skills = document.querySelectorAll('.skill-bar');

  skills.forEach(bar => {
    const width = bar.getAttribute('data-width'); // valor da skill em %
    bar.style.width = width; // animação via CSS transition
  });
}

// ==========================
// Inicializa animações
// ==========================
function initAnimations() {
  animateOnScroll();
  animateSkills();
}

// ==========================
// Eventos
// ==========================
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', initAnimations);
