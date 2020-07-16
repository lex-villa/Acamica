/* Ingresar mediante prompt numeros indefinidamente hasta que el usuario ingrese "Stop".
Almacenar todos los datos en un array  y mostrarlos al final.
"Stop" debe quedar fuera de nuestro array. */

const arr = [];
let numberIn;

while (true) {
    numberIn = prompt("Ingresa un numero: ");
    if (numberIn === 'Stop') {
        break;
    } else {
        if (isNaN(numberIn)) {
            
        } else {
            arr.push(parseInt(numberIn))
        }
    }
}

alert(arr); 
