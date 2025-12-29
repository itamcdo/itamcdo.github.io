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

function animateSkills() {
  const skills = document.querySelectorAll('.skill-bar');
  skills.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = width;
  });
}

function initAnimations() {
  animateOnScroll();
  animateSkills();
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', initAnimations);
