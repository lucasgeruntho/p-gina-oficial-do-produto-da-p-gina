VANTA.HALO({
  el: ".background-topo",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 590.00,
  minWidth: 200.00,
  backgroundColor: 0x22307c,
  amplitudeFactor: 1.90,
  xOffset: 0.01,
  yOffset: -0.08,
  size: 2.90
})





window.addEventListener('scroll', function() {
  const circulo = document.querySelector('.circulo span');
  const rotation = window.scrollY % 360;
  circulo.style.transform = `rotate(${rotation}deg)`;
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













 