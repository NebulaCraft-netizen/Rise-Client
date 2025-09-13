// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in, .slide-up, .slide-in-right')
  .forEach(el => observer.observe(el));

// Hover gradient effect on feature cards
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,216,255,0.2), #1a1a1a)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = 'linear-gradient(145deg, #1a1a1a, #222222)';
  });
});

// Optional: Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('mousemove', e => {
  if (!hero) return;
  const x = (window.innerWidth / 2 - e.pageX) / 50;
  const y = (window.innerHeight / 2 - e.pageY) / 50;
  hero.style.transform = `translate(${x}px, ${y}px)`;
});
