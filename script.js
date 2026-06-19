(function () {
  const header = document.querySelector("header");
  const nav = header.querySelector("nav");

  // Cria o botão hambúrguer e insere antes do <nav>, sem alterar o HTML
  const toggle = document.createElement("button");
  toggle.className = "nav-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Abrir menu de navegação");
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
  header.insertBefore(toggle, nav);

  // Cria o fundo escurecido (backdrop) usado no mobile
  const backdrop = document.createElement("div");
  backdrop.className = "nav-backdrop";
  document.body.appendChild(backdrop);

  function openNav() {
    nav.classList.add("is-open");
    backdrop.classList.add("is-visible");
    toggle.setAttribute("aria-expanded", "true");
    toggle.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    nav.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    nav.classList.contains("is-open") ? closeNav() : openNav();
  });

  backdrop.addEventListener("click", closeNav);

  nav
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeNav));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 769) closeNav();
  });
})();
