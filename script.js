// script.js

// Função para detectar elementos visíveis na tela
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 50
  );
}

// Adiciona classe 'show' quando o elemento entra na viewport
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('show');
    }
  });

  // Foto de perfil animada
  const profile = document.querySelector('.profile-img');
  if (profile && isInViewport(profile)) {
    profile.classList.add('show');
  }
}

// Inicializa animações ao carregar a página
window.addEventListener('load', () => {
  animateOnScroll();
});

// Atualiza animações ao rolar a página
window.addEventListener('scroll', () => {
  animateOnScroll();
});
