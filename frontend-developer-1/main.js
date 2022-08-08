function toggleMenu(menu) {

    if(menu.classList.contains("mobile-menu")) { // Checking what menu is wanted to open
        if(!shoppingCart.classList.contains("inactive")) // Checking if menus that overlap are active
            shoppingCart.classList.add("inactive"); // If they are, we quit it from screen

        if(!productDetailed.classList.contains("inactive"))
            productDetailed.classList.add("inactive")
    }
    else if(menu.classList.contains("product-details")){ //
        if(!mobileMenu.classList.contains("inactive"))
            mobileMenu.classList.add("inactive");

        if(!desktopMenu.classList.contains("inactive"))
            desktopMenu.classList.add("inactive");

        if(!productDetailed.classList.contains("inactive"))
            productDetailed.classList.add("inactive")
    }
    else if(menu.classList.contains("desktop-menu")) {

        if(!shoppingCart.classList.contains("inactive"))
            shoppingCart.classList.add("inactive");

        if(!productDetailed.classList.contains("inactive"))
            productDetailed.classList.add("inactive")
    }
    else if(menu.classList.contains("product-detailed")){ // To open product detailed
        if(!mobileMenu.classList.contains("inactive"))
            mobileMenu.classList.add("inactive");

        if(!shoppingCart.classList.contains("inactive"))
            shoppingCart.classList.add("inactive");

        if(!desktopMenu.classList.contains("inactive"))
            desktopMenu.classList.add("inactive");

        if(menu.classList.contains("inactive"))
            menu.classList.remove("inactive")
        return;
    }

    else if(menu.classList.contains("product-detailed-close")){ // To close product detailed by clicking button
        if(!productDetailed.classList.contains("inactive"))
            productDetailed.classList.add("inactive")
        return;
    }

    menu.classList.toggle("inactive");
}

function createProductCard(product) {
    // This just follows the structure from the HTML
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.addEventListener("click", () => toggleMenu(productDetailed));

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
    productImgCart.addEventListener("click", () => addToCart());

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.append(productPrice, productName);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(img, productInfo);

    // We sent to the function the necessary product information
    img.addEventListener("click", () => modifyProductDetailed(img.getAttribute("src"), product.price, product.name));

    return productCard;
}

function renderProducts(productList) {
    for (let product of productList) {
        const productCard = createProductCard(product);
        cardsContainer.appendChild(productCard);
    }
}

function addToCart() {
    numberProducts.innerText = parseInt(numberProducts.innerHTML) + 1;
}

/* Function that modifies the productDetailed aside with productCard that
it's been clicked*/
function modifyProductDetailed(productImg, productPrice, productName){

    /* Getting the img tag from the childNodes of the productDetailed, we
     get the right index by debugging console.log({productDetailedImg}) */
    const productDetailedImg = productDetailed.childNodes[5];

    // Getting productDetailedInfo of the productDetailed aside
    const productDetailedInfo = productDetailed.childNodes[7];
    // Getting each p tag from productDetailedInfo
    const productDetailedPrice = productDetailedInfo.childNodes[1];
    const productDetailedName = productDetailedInfo.childNodes[3];

    productDetailedImg.setAttribute("src", productImg);
    productDetailedPrice.innerText = "$" + productPrice;
    productDetailedName.innerText = productName;
}

const navBarEmail = document.querySelector(".nav-bar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".nav-shopping-cart");
const shoppingCart = document.querySelector(".product-details");
const cardsContainer = document.querySelector(".cards-container");
const productDetailed = document.querySelector(".product-detailed");
const productDetailedClose = document.querySelector(".product-detailed-close");
const numberProducts = document.querySelector("#number-products");
const addToCartButton = document.querySelector(".add-to-cart-button");
const myOrderContent = document.querySelector(".my-order-content");


navBarEmail.addEventListener("click", () => toggleMenu(desktopMenu));
burgerIcon.addEventListener("click", () => toggleMenu(mobileMenu));
cartIcon.addEventListener("click", () => toggleMenu(shoppingCart));
productDetailedClose.addEventListener("click", () => toggleMenu(productDetailedClose));
addToCartButton.addEventListener("click", () => addToCart());


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

renderProducts(productList);