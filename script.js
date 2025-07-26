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

    menuBtn.addEventListener("click", () => {
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
    });

    submenu.addEventListener("click", () => {
      submenu.classList.toggle("active");
    });
  });

