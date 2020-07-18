import { context, context2, handlebarRender2 } from './handlebars.js';

/** Inicializar variables para el carrito de compras */
let shopCartArr = [];
let totalPrice = 0;
let prodCounter = 0;
/** Obtener los espacios en el HTML para poner los datos del carrito de compras */
let prodCounterTag = document.getElementById('products-counter');
let totalPriceTag = document.getElementById('total-price-digit');

export const shoppincgCartLogic = event => {
    /** Se obtienen los datos del elemento donde se hizo el click y se escucho con el listener */
    let src = event.target.parentNode.childNodes[1].childNodes[1].src;
    let nameProduct = event.target.parentNode.childNodes[3].innerHTML;
    let productPrice = event.target.parentNode.childNodes[5].innerHTML;

    /* Encuentra el indice del objeto clickeado en el array de objetos original de productos.
    Para despues copiar ese objeto en un nuevo array de cosas compradas y en el array que se usa
    para dibujar el template en el HTML */
    let indexObject = context.values.findIndex(element => element.productName == nameProduct);

    shopCartArr.push(context.values[indexObject])

    context2.values2.push(context.values[indexObject]);
    
    /* Recarga la plantilla HTML */
    handlebarRender2();

    prodCounter++;
    prodCounterTag.innerHTML = prodCounter;

    /** Hace la suma del producto agregado y lo actualiza en el HTML*/
    let arrayPrecios = shopCartArr.map(element => parseFloat(element.productPrice))
    totalPrice = arrayPrecios.reduce((acc, curr) => {
        return acc + curr;
    })
    totalPriceTag.innerHTML = totalPrice;
};