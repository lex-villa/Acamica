/** Handlebars */
/** Template de las tarjetas de los productos que se venden */
/** Obtiene el template Handlebars que esta en un script tag en el HTML*/
let source = document.getElementById('script-template-id').innerHTML;
let template = Handlebars.compile(source);
export let context = {
    values: []
};

/** Funcion para poner el template de Handlebars en el HTML */
export const handlebarRender = () => {
    let compiledHTML = template(context);
    let productCard = document.getElementById('products-container');
    return productCard.innerHTML = compiledHTML;
}

/** Template de las tarjetas de los productos que estan en el carrito */
let source2 = document.getElementById('script-template-shoppyCar-id').innerHTML;
let template2 = Handlebars.compile(source2);
console.log(source2);
export let context2 = {
    values2: []
};

export const handlebarRender2 = () => { 
    let compiledHTML2 = template2(context2);
    let productCard2 = document.getElementById('client-product-list');
    productCard2.innerHTML = compiledHTML2;
}