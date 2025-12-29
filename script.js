// Animação de elementos ao scroll (títulos, cards, skills)
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-animate], .card, .skill-card');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const positionFromTop = el.getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= -100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
