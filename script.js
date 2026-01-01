// ==========================
// ANIMAÇÃO AO SCROLL
// ==========================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("[data-animate], .card").forEach(el => {
  observer.observe(el);
});

// ==========================
// SKILLS
// ==========================
const skillBars = document.querySelectorAll(".skill-bar");

const skillsObserver = new IntersectionObserver(
  entries => {
    if (entries[0].isIntersecting) {
      skillBars.forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
      skillsObserver.disconnect();
    }
  },
  { threshold: 0.3 }
);

if (skillBars.length) {
  skillsObserver.observe(skillBars[0]);
}
