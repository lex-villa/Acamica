import { handlebarRender } from './handlebars.js';
import { createProduct, addProduct } from './product.js';
import { shoppincgCartLogic } from './shoppingCart.js';


/** Creacion de Productos en existencia */
addProduct(createProduct("https://via.placeholder.com/250x150.png", "Un Goku", (17.05).toFixed(2)));
addProduct(createProduct("https://via.placeholder.com/250x150.png", "Laptop", (500.00).toFixed(2)));
addProduct(createProduct("https://via.placeholder.com/250x150.png", "Pastel", (200.05).toFixed(2)));
addProduct(createProduct("https://via.placeholder.com/250x150.png", "Un charmander", (1707.99).toFixed(2)));
addProduct(createProduct("https://via.placeholder.com/250x150.png", "Television", (100.00).toFixed(2)));
addProduct(createProduct("https://via.placeholder.com/250x150.png", "Un robot", (1030.55).toFixed(2)));
addProduct(createProduct("https://via.placeholder.com/250x150.png", "Matcha", (10.10).toFixed(2)));
addProduct(createProduct("https://via.placeholder.com/250x150.png", "El corazon de ella", (666.66).toFixed(2)));

handlebarRender();

/** Con querySelectorAll y el forEach se hace que todos los botones de 'agregar carrito' tengan el listener*/
let btnAddShopCar = document.querySelectorAll('.btn-add-car');

btnAddShopCar.forEach(item => {
    item.addEventListener('click', shoppincgCartLogic);
});


/** Hace clickeable el icono del carrito de compras */
let btnCarrito = document.getElementById('shop-car');
let shopList = document.getElementById('shop-list');
let isClicked = true;

btnCarrito.addEventListener('click', () => {
    if (isClicked) {
        shopList.style.display = 'flex';
        isClicked = false;
    } else {
        shopList.style.display = 'none';
        isClicked = true;
    }
});
