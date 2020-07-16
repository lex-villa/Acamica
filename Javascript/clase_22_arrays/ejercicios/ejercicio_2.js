/* Ingresar mediante prompt numeros indefinidamente hasta que el usuario ingrese 0(cero).
Crear un array para los numeros pares, otro para los impares y un tercero para almacenar datos
no numericos. Mostrar los arreglos. */

const arrPares = [];
const arrImpares = [];
const arrOthers = [];
let numberIn;

while (true) {
    numberIn = prompt("Ingresa un numero: ");
    if (isNaN(numberIn)) {
        arrOthers.push(numberIn);
    } else {
        parseInt(numberIn);
        if(numberIn == 0) {
            break;
        } else {
            (numberIn % 2) == 0 ? arrPares.push(numberIn) : arrImpares.push(numberIn);
        }
    }; 
}

alert(`Array de numeros pares: ${arrPares}`);
alert(`Array de numeros impares: ${arrImpares}`);
alert(`Array de otros: ${arrOthers}`); 