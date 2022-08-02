function toggleMenu(menu) {

    if(menu.classList.contains("mobile-menu")) { // Checking what menu is wanted to open
        if(!shoppingCart.classList.contains("inactive")) // Checking if menus that overlap are active
            shoppingCart.classList.add("inactive"); // If they are, we quit it from screen
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

function createProductCard(product) {
    // This just follows the structure from the HTML
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const productInfoFigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.append(productPrice, productName);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(img, productInfo);

    return productCard;
}

function renderProducts(productList) {
    for (let product of productList) {
        const productCard = createProductCard(product);
        cardsContainer.appendChild(productCard);
    }
}

const navBarEmail = document.querySelector(".nav-bar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".nav-shopping-cart");
const shoppingCart = document.querySelector(".product-details");
const cardsContainer = document.querySelector(".cards-container");

navBarEmail.addEventListener("click", () => toggleMenu(desktopMenu));
burgerIcon.addEventListener("click", () => toggleMenu(mobileMenu));
cartIcon.addEventListener("click", () => toggleMenu(shoppingCart));

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Xbox Series S",
    price: 500,
    image: "https://images.pexels.com/photos/10997583/pexels-photo-10997583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Laptop",
    price: 700,
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name:'Bicycle helmet',
    price: 250,
    image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});

productList.push({
    name:'Sunglasses',
    price: 350,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});

renderProducts();