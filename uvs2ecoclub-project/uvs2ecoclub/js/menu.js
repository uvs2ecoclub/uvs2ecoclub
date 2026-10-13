/* Гар утасны цэс болон дэд цэс */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mainMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Цэс хаах" : "Цэс нээх");
      toggle.textContent = open ? "✕" : "☰";
    });
  }

  document.querySelectorAll(".dropdown-toggle").forEach(button => {
    button.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        const parent = button.closest(".nav-dropdown");
        const open = parent.classList.toggle("open");
        button.setAttribute("aria-expanded", String(open));
      }
    });
  });
});
