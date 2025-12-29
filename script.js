// Função para animação de elementos ao scroll
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

// Barra de skills animada
function animateSkills() {
  const skills = document.querySelectorAll('.skill-bar');

  skills.forEach(bar => {
    const width = bar.getAttribute('style').match(/width:\s*(\d+)%/)[1];
    bar.style.width = width + '%';
  });
}

// Inicializa animações
function initAnimations() {
  animateOnScroll();
  animateSkills();
}

// Eventos
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', initAnimations);
