function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
}

const navBarEmail = document.querySelector(".nav-bar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navBarEmail.addEventListener("click", toggleDesktopMenu);