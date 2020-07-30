/** Crea una promesa que elija un número al azar
entre 0 y 10.
- Si el número es par, considera la promesa exitosa.
- Si el número es impar, rechaza la promesa.
Muestra por consola si la promesa finalizó con éxito o
no y el número al azar que salió.
 */

const promesa = new Promise((response, reject) => {
    const randomNumber = Math.floor(Math.random() * 11);;
    console.log(`El numero aleatorio es ${randomNumber}`);
    randomNumber % 2 == 0 ? response('Promesa exitosa') : reject('Promesa rechazada');  
});

promesa.then(result => {
    console.log(result);
}).catch(err => console.log(err));


