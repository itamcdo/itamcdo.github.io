// ==========================
// Animação ao carregar a página (hero e cards)
// ==========================
function animateOnLoad() {
  const elements = document.querySelectorAll('[data-animate]');
  elements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.15}s`;
    el.classList.add('show');
  });
}

// ==========================
// Animação ao scroll
// ==========================
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-animate]:not(.show)');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const positionFromTop = el.getBoundingClientRect().top;
    if (positionFromTop < windowHeight - 100) {
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
    const width = bar.getAttribute('data-width');
    setTimeout(() => { bar.style.width = width; }, 300);
  });
}

// ==========================
// Inicialização geral
// ==========================
function initAnimations() {
  animateOnLoad();
  animateSkills();
  animateOnScroll();
}

// ==========================
// Eventos globais
// ==========================
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', initAnimations);

// ==========================
// FORMULÁRIO DE CONTATO
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      nome: form.nome.value,
      email: form.email.value,
      mensagem: form.mensagem.value
    };

    const button = form.querySelector("button");
    const originalText = button.textContent;

    button.disabled = true;
    button.textContent = "Enviando...";

    try {
      const response = await fetch(
        "https://SEU_BACKEND_AQUI/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }
      );

      if (!response.ok) throw new Error("Erro ao enviar");

      alert("Mensagem enviada com sucesso!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem.");
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
});
