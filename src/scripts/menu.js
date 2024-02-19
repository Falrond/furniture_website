document.addEventListener("astro:page-load", () => {
  let menuToggle = document.querySelector(".menu-toggle2");
  let menuClose = document.querySelector(".menu-close");
  let menu = document.querySelector(".menu");

  let navLinks = Array.from(document.querySelectorAll(".nav-link"));

  menuToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);

  function openMenu() {
    menu.classList.add("active");
    navLinks.forEach((link, idx) => {
      setTimeout(() => {
        link.classList.add("active");
      }, (idx + 1) * 220);
    });
  }

  function closeMenu() {
    menu.classList.remove("active");

    setTimeout(() => {
      navLinks.forEach((link) => {
        setTimeout(() => {
          link.classList.remove("active");
        }, 100);
      });
    });
  }
});
