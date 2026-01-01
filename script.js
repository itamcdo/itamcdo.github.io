// ==========================
// AGUARDA DOM CARREGAR
// ==========================
document.addEventListener("DOMContentLoaded", () => {

  // ==========================
  // ANIMAÇÃO AO SCROLL
  // ==========================
  const animateObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll("[data-animate]").forEach(el => {
    animateObserver.observe(el);
  });

  // ==========================
  // SKILLS – anima barras só se existirem
  // ==========================
  const skillBars = document.querySelectorAll(".skill-bar");

  if (skillBars.length > 0) {
    const skillsObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          skillBars.forEach((bar, index) => {
            const width = bar.dataset.width;
            setTimeout(() => {
              bar.style.width = width;
            }, index * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    skillsObserver.observe(skillBars[0]);
  }

});
