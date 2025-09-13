// Simple fade/slide animations on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-in, .slide-up, .slide-in-right')
  .forEach(el => observer.observe(el));
