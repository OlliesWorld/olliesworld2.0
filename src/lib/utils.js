export function initReveals() {
  if (typeof IntersectionObserver === 'undefined') return;
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach(el => io.observe(el));
}

export function animateCounters() {
  document.querySelectorAll('.stat-big[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let start = 0;
    const dur = 1400;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const p = Math.min((timestamp - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(ease * target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  });
}
