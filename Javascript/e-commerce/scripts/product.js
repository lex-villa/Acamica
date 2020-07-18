import {context} from './handlebars.js'; 

class Product {
    constructor(src, productName, productPrice) {
        this.srcImg = src,
            this.productName = productName,
            this.productPrice = productPrice
    }

    get src() {
        return this.srcImage
    }
    get getProductName() {
        return this.productName
    }
    get getProductPrice() {
        return this.productPrice
    }
};

/** Crea un objeto de tipo Producto */
export const createProduct = (src, productName, productPrice) => {
    return new Product(src, productName, productPrice);
};
/** Agrega el objeto tipo Producto al array del Handlebar template para insertarlos en HTML */
export const addProduct = (productObject) => {
    context.values.push(productObject);
};