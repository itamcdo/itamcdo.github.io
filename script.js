// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      if(entry.target.classList.contains('skill')){
        const bar = entry.target.querySelector('.skill-bar');
        if(bar) bar.style.width = bar.getAttribute('data-width');
      }
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card, .skill, .badge').forEach(el => observer.observe(el));
