// Comportamento da landing page: menu mobile, scroll reveal e facade do mapa.

document.addEventListener("DOMContentLoaded", () => {
  configurarMenuMobile();
  configurarScrollReveal();
  configurarFacadeMapa();
});

function configurarMenuMobile() {
  const botao = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-menu-mobile]");
  if (!botao || !menu) return;

  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("is-aberto");
    botao.setAttribute("aria-expanded", String(aberto));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-aberto");
      botao.setAttribute("aria-expanded", "false");
    });
  });
}

function configurarScrollReveal() {
  const alvos = document.querySelectorAll("[data-reveal]");
  if (!alvos.length) return;

  if (!("IntersectionObserver" in window)) {
    alvos.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observer.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  alvos.forEach((el) => observer.observe(el));
}

function configurarFacadeMapa() {
  const facade = document.querySelector("[data-mapa-facade]");
  if (!facade) return;

  const botao = facade.querySelector("[data-mapa-btn]");
  botao?.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = typeof GOOGLE_MAPS_EMBED_URL !== "undefined" ? GOOGLE_MAPS_EMBED_URL : "";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.title = "Mapa da Pedrinho Barbearia";
    facade.innerHTML = "";
    facade.appendChild(iframe);
  });
}
