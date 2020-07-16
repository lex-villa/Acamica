/* Ingresar mediante prompt numeros indefinidamente hasta que el usuario ingrese 0(cero).
Almacenar en un array solamente los numeros. 
Eliminar del array el numero mas alto y el mas bajo. Si el mas alto o bajo se repiten
solo eliminarlos una vez */

const arr = [];
let numberIn;

while (true) {
    numberIn = prompt("Ingresa un numero: ");
    if (isNaN(numberIn)) {

    } else {
        
        if(numberIn.trim() === "") {
            /** Para que espacios en blanco no formen parte del array final */
        } else {
            numberIn = parseInt(numberIn);
            if(numberIn == 0) {
                break;
            } else {
                arr.push(numberIn);
            }
        }
    }; 
}

alert(`Array de numeros: ${arr}`);

let min = Math.min(...arr);
let max = Math.max(...arr);

let indexMin = arr.indexOf(min);
arr.splice(indexMin, 1);


let indexMax = arr.indexOf(max);
arr.splice(indexMax, 1);


alert(`Array modificado de numeros: ${arr}`);