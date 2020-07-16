/* Ingresar mediante prompt cualquier caracter hasta el ingreso de un 0.
Almacenar cada ingreso en una posicion del array.
Al finalizar dividir la cantidad de elementos en 3 arrays iguales .
Si sobra un elemento, eliminar el primero.
Si sobran dos elementos, eliminar el primero y el ultimo. */

const arr1 = [];
const arr2 = [];
const arr3 = [];
let numberIn;

while(true) {
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
                arr1.push(numberIn);
            };
        };
    }; 
};

alert(`Array orginal: ${arr1}`);

let numItems = arr1.length;

if(numItems >= 3) {
    if((numItems % 3) === 2) {
        arr1.shift();
        arr1.pop();
    } else if((numItems % 3) === 1) {
        arr1.shift;
    }

    times = numItems / 3;

    for(let i = 0; i < times; i++) {
        arr3.unshift(arr1.pop());
    };
    for(let i = 0; i < times; i++) {
        arr2.unshift(arr1.pop());
    };
};

alert(`Array orginal modificado: ${arr1}`);
alert(`Array 2 modificado: ${arr2}`);
alert(`Array 3 modificado: ${arr3}`);