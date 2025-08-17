

  (function () {
    const track = document.getElementById('tech-track');
    if (!track) return;

   
    const originalItems = Array.from(track.children);
    const originalWidth = originalItems.reduce((w, el) => w + el.getBoundingClientRect().width, 0)
                          + (originalItems.length - 1) * parseFloat(getComputedStyle(track).gap || 0);

    
    const container = track.parentElement;
    let targetWidth = container.clientWidth * 2;
    while (track.scrollWidth < targetWidth) {
      originalItems.forEach(node => track.appendChild(node.cloneNode(true)));
    }

   
    
    const totalWidth = track.scrollWidth;
    const ratio = originalWidth / totalWidth; 
    const keyframes = document.createElement('style');
    keyframes.textContent = `
      @keyframes scroll-left {
        from { transform: translateX(0); }
        to   { transform: translateX(-${ratio * 100}%); }
      }
    `;
    document.head.appendChild(keyframes);

   
    let ro;
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => {
        track.style.animation = 'none';
        void track.offsetHeight; 
        track.style.animation = '';
      });
      ro.observe(container);
    }
  })();

