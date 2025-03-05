window.onload = () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navbarMenu = document.querySelector(".navbar-menu");
  const navbarCloseMenu = document.querySelector(".navbar-close-menu");
  navbarMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("display-none");
    navbarCloseMenu.classList.add("display-block");
    navbarMenu.classList.add("display-none");
  });

  navbarCloseMenu.addEventListener("click", () => {
    mobileMenu.classList.add("display-none");
    navbarCloseMenu.classList.remove("display-block");
    navbarMenu.classList.remove("display-none");
  });
};
