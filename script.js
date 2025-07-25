 document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("social-toggle");
    const popup = document.getElementById("social-popup");

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const rect = toggle.getBoundingClientRect();

      // Posiciona abaixo do botão
      popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
      popup.style.left = `${rect.left + window.scrollX}px`;

      popup.style.display = popup.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener("click", function (e) {
      if (!popup.contains(e.target) && !toggle.contains(e.target)) {
        popup.style.display = "none";
      }
    });
  });
