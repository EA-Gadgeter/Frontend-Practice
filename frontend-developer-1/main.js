function toggleMenu(menu) {

    if(menu.classList.contains("mobile-menu")) {
        if(!shoppingCart.classList.contains("inactive"))
            shoppingCart.classList.add("inactive");
    }
    else if(menu.classList.contains("product-details")){
        if(!mobileMenu.classList.contains("inactive"))
            mobileMenu.classList.add("inactive");

        if(!desktopMenu.classList.contains("inactive"))
            desktopMenu.classList.add("inactive");
    }
    else if(menu.classList.contains("desktop-menu")) {
        if(!shoppingCart.classList.contains("inactive"))
            shoppingCart.classList.add("inactive");
    }

    menu.classList.toggle("inactive");
}

const navBarEmail = document.querySelector(".nav-bar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".nav-shopping-cart");
const shoppingCart = document.querySelector(".product-details");

navBarEmail.addEventListener("click", () => toggleMenu(desktopMenu));
burgerIcon.addEventListener("click", () => toggleMenu(mobileMenu));
cartIcon.addEventListener("click", () => toggleMenu(shoppingCart));