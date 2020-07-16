let numero = parseInt(prompt('Ingresa un numero: '));

if(numero > 10) {
    let numero = parseInt(prompt('Ingresa un numero: '));

    (numero > 100) ? console.log('Mostrar A') : console.log('Mostrar B');   

} else {
    numero = parseInt(prompt('Ingresa un numero: '));

    (numero > 1000) ? console.log('Mostrar C') : console.log('Mostrar D');
};

console.log(`Numero seleccionado ${numero}`);