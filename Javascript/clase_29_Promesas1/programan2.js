/** Al ejercicio anterior añade un retraso de 2 segundos
con setTimeOut en la lógica de tu promesa.
Podrás observar por ti mismo que el mensaje solo se
mostrará cuando la promesa se haya resuelto.
 */


const promesa = new Promise((response, reject) => {
    const randomNumber = Math.floor(Math.random() * 11);;
    console.log(`El numero aleatorio es ${randomNumber}`);
    setTimeout( () => {
        randomNumber % 2 == 0 ? response('Promesa exitosa') : reject('Promesa rechazada')}, 3000);  
    });

promesa.then(result => {
    console.log(result);
});