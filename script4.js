
document.addEventListener('DOMContentLoaded', () => {
  const root  = document.querySelector('.loop-marquee');
  const track = root.querySelector('.loop-marquee__track');
  const baseGroup = root.querySelector('.loop-marquee__group');

  let cycleWidth = 0;
  let pos = 0;
  const speed = 0.6; // px por frame
  let raf;

  const measure = el => el.getBoundingClientRect().width;

  function build() {
    track.innerHTML = '';
    const original = baseGroup.cloneNode(true);
    track.appendChild(original);

    cycleWidth = measure(original);

    const need = root.clientWidth + cycleWidth;
    let total = cycleWidth;
    while (total < need) {
      const clone = original.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
      total += cycleWidth;
    }

    pos = 0;
    track.style.transform = 'translate3d(0,0,0)';
  }

  function tick() {
    pos -= speed;
    if (pos <= -cycleWidth) pos += cycleWidth;
    track.style.transform = `translate3d(${pos}px,0,0)`;
    raf = requestAnimationFrame(tick);
  }

  function start() {
    cancelAnimationFrame(raf);
    build();
    tick();
  }

  start();

  let t;
  addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(start, 120);
  });
});


(() => {
  const bar = document.querySelector('.pills-reveal');
  const anchor = document.getElementById('pills-anchor');
  if(!bar || !anchor) return;

  let activated = false; // só ativa uma vez; reseta apenas no refresh

  // Observa quando o usuário chega ao ponto onde o componente "ficaria"
  const io = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (activated) return;

    // quando o anchor entra bem no viewport, ativa
    if (entry.isIntersecting) {
      activated = true;
      bar.classList.add('is-visible', 'is-stuck');
      io.disconnect(); // não precisamos mais observar
    }
  }, { threshold: 0.6 });

  io.observe(anchor);

  // Fallback: se a página já abrir abaixo do anchor (ex: âncora/refresh)
  window.addEventListener('load', () => {
    if (activated) return;
    const rect = anchor.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.4) {
      activated = true;
      bar.classList.add('is-visible', 'is-stuck');
      io.disconnect();
    }
  }, { passive: true });
})();




