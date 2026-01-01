// ==========================
// HERO – anima ao carregar
// ==========================
window.addEventListener("load", () => {
  document.querySelectorAll(".hero [data-animate]").forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.15}s`;
    el.classList.add("show");
  });
});

// ==========================
// OBSERVER PARA CARDS E SEÇÕES
// ==========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// Observa todos os elementos animáveis fora do hero
document.querySelectorAll("[data-animate]:not(.hero *)").forEach(el => {
  observer.observe(el);
});

// ==========================
// SKILLS – anima somente quando visível
// ==========================
let skillsAnimated = false;

const skillsSection = document.querySelector(".skill-card");

if (skillsSection) {
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !skillsAnimated) {
        skillsAnimated = true;

        document.querySelectorAll(".skill-bar").forEach((bar, index) => {
          const width = bar.getAttribute("data-width");
          setTimeout(() => {
            bar.style.width = width;
          }, index * 150);
        });
      }
    },
    { threshold: 0.3 }
  );

  skillsObserver.observe(skillsSection);
}

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
      const response = await fetch("https://SEU_BACKEND_AQUI/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

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
