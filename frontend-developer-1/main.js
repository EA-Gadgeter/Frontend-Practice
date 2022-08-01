function toggleMenu(menu) {
    menu.classList.toggle("inactive");
}

const navBarEmail = document.querySelector(".nav-bar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navBarEmail.addEventListener("click", () => toggleMenu(desktopMenu));
burgerIcon.addEventListener("click", () => toggleMenu(mobileMenu));