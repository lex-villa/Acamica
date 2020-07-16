class perro {
    constructor(nombre, color) {
        this._nombre = nombre;
        this._color = color;
        this._hambre = 'nada'; 
    }

    

    ladrido() {
        alert(`Soy ${this._nombre}! Wooff! woof! y tengo ${this._hambre} de hambre`);
    }

    correr() {
        alert(`Soy el rayo ${this._color} mas rapido del mundo`);
    }
}


let perrito_snoopy = new perro('snoopy', 'blanco');
let perrito_scooby = new perro('scooby', 'cafe');

perrito_snoopy.ladrido();
perrito_scooby.ladrido();

perrito_snoopy.correr();
perrito_scooby.correr();