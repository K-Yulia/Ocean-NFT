document.querySelectorAll('a[href="#"]').forEach((a) => {
  a.addEventListener("click", (e) => e.preventDefault());
});

const form = document.querySelector(".subscribe__form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });
(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    header: document.querySelector(".page-header"),
    navList: document.querySelector(".js-nav"),
    backdrop: document.querySelector("[data-menu-backdrop]"),
  };

  let scrollPosition = 0;

  const openMenu = () => {
    scrollPosition = window.scrollY;
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    refs.menu.classList.add("is-open");
    refs.header.classList.add("menu-open");
  };

  const closeMenu = () => {
    refs.menu.classList.remove("is-open");
    refs.header.classList.remove("menu-open");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollPosition);
  };

  refs.openMenuBtn.addEventListener("click", openMenu);
  refs.closeMenuBtn.addEventListener("click", closeMenu);

  refs.navList.addEventListener("click", (event) => {
    if (event.target.nodeName === "A") {
      closeMenu();
    }
  });

  refs.backdrop.addEventListener("click", closeMenu);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      refs.header.classList.add("scrolled");
    } else {
      refs.header.classList.remove("scrolled");
    }
  });
})();
