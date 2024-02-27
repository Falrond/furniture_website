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
      setTimeout(
        () => {
          link.classList.add("active");
        },
        (idx + 1) * 220
      );
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

function createLightGallery() {
  // @ts-ignore
  lightGallery(document.getElementById("lightgallery"), {
    selector: ".img-item",
  });
}

createLightGallery();

document.addEventListener("astro:after-swap", () => {
  (function () {
    window.scrollTo(0, 0);
  })();
  createLightGallery();
  var logo = document.querySelector(".logo");
  logo.addEventListener("click", function (event) {
    // Sprawdź aktualny adres URL
    var currentPage = window.location.pathname;

    // Jeśli aktualna strona to strona główna ("/"), wykonaj przewijanie do góry i zapobiegnij domyślnej akcji
    if (currentPage === "/" || currentPage === "" || currentPage === "/#") {
      event.preventDefault();
      window.scrollTo({ top: 10, behavior: "smooth" });
    }
  });
});
