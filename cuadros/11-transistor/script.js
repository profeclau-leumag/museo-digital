const themeBtn = document.getElementById("themeBtn");
const topBtn = document.getElementById("topBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animación de aparición al entrar en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".info-card, .step, .use, .timeline-item, .importance-box")
  .forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });

// Estilos de la animación añadidos dinámicamente
const style = document.createElement("style");
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity .65s ease, transform .65s ease;
  }
  .reveal.show {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
