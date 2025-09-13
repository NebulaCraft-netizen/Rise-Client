// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:0.2});

document.querySelectorAll('.fade-in,.slide-up,.slide-in-right')
  .forEach(el=>observer.observe(el));
