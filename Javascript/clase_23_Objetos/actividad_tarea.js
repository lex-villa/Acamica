class Dog {
    /* Properties */
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._adoption = {
            adopted: false,
            inProcess: false
        };
    }
    /* Getters */
    get name() {
        return this._name;
    };
    get age() {
        return this._age;
    };
    get adoption() {
        return this._adoption;
    };

    /* Setters */
    set name(name) {
        this._name = name;
    };
    set age(age) {
        this._age = age;
    };

    /* Methods */
    modifyAdoption(isAdopted, isInProcess) {
        this._adoption.adopted = isAdopted;
        this._adoption.inProcess = isInProcess;
    };

    informAdoption() {
        console.log(`Status de adopcion del perrito ${this._name}:
        adoptado: ${this._adoption.adopted}
        proceso de adopcion: ${this._adoption.inProcess}`);
    };
};


/** */
const addPerrito = () => {
    let doggyName = prompt('Ingresa el nombre del perrito: ');
    let doggyAge = prompt('Ingresa la edad del perrito: ');

    doggyName = new Dog(doggyName, doggyAge);

    arrayDePerritos.push(doggyName);
};


/** */
const arrayDePerritos = [];
let addOtroPerrito;
let perritoCounter = 0;

addOtroPerrito = confirm('Quieres crear y agregar un perrito al array de perritos?');

while (addOtroPerrito) {

    addPerrito();

    perritoCounter++;
    addOtroPerrito = confirm(`Quieres crear y agregar otro perrito? Ya llevas ${perritoCounter}`);
}


/* Crea perritos y modifica su estado de adopcion ya que su valor default de cada objeto perrito es no estar adoptado*/
const pelusin = new Dog('pelusin', 5);
const snoopy = new Dog('snoopy', 1);
const perrito3 = new Dog('perrito3', 2);
const perrito4 = new Dog('perrito4', 7);

arrayDePerritos.push(pelusin);
arrayDePerritos.push(snoopy);
arrayDePerritos.push(perrito3);
arrayDePerritos.push(perrito4);

pelusin.modifyAdoption(true, false);
snoopy.modifyAdoption(false, true);
perrito3.modifyAdoption(true, false);
perrito4.modifyAdoption(true, false);


/** */
const perritosAdoptados = arrayDePerritos.filter(x => x.adoption.adopted == true);
const perritosEnProceso = arrayDePerritos.filter(x => x.adoption.inProcess == true);



console.log('Estos son todos los perritos: ', arrayDePerritos);
console.table(arrayDePerritos);

console.log('array de perritos adoptados ya: ', perritosAdoptados);
console.table(perritosAdoptados);


console.log('array de perritos en proceso de ser adoptados: ', perritosEnProceso);
console.table(perritosEnProceso);