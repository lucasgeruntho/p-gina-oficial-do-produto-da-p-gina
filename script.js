 document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("social-toggle");
    const popup = document.getElementById("social-popup");

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const rect = toggle.getBoundingClientRect();

      // Posiciona abaixo do botão
      popup.style.top = `${rect.bottom + window.scrollY + 25}px`;
      popup.style.left = `${rect.left + window.scrollX + -25}px`;

      popup.style.display = popup.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener("click", function (e) {
      if (!popup.contains(e.target) && !toggle.contains(e.target)) {
        popup.style.display = "none";
      }
    });
  });


document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const submenu = document.querySelector(".submenu");

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const isActive = menuBtn.classList.toggle("active"); 
    menu.style.display = isActive ? "flex" : "none";

    // Ativa a submenu automaticamente quando o menu for aberto
    if (isActive) {
      submenu.classList.add("active");
    } else {
      submenu.classList.remove("active");
    }
  });

  // Se clicar em qualquer lugar fora do botão, remove o ativo
  document.addEventListener("click", () => {
    if (menuBtn.classList.contains("active")) {
      menuBtn.classList.remove("active");
      menu.style.display = "none";
      submenu.classList.remove("active");
    }
  });

  // Ainda permite o clique para alternar a submenu manualmente
  submenu.addEventListener("click", () => {
    submenu.classList.toggle("active");
  });
});


const btn = document.querySelector('.circle-btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
});



