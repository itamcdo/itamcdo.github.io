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
    const width = bar.getAttribute('data-width') || "80%";
    // Animação suave com delay
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
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
