VANTA.HALO({
  el: ".background-topo",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 580.00,
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