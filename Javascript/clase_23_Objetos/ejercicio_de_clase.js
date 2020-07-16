/* Programemos juntos una clase que tenga las
propiedades de nombre, apellido y edad con los
siguientes métodos:
- fullname: debe retornar el nombre y apellido
concatenados con un espacio entre ambos
- es_mayor: debe retornar true o false dependiendo
si la persona es mayor de edad o no */


class Persona {
    constructor(name, lastName, age) {
        this._name = name;
        this._lastName = lastName;
        this._age = age;
    };

    /* Getters */
    get name() {
        return this._name;
    };

    get lastName() {
        return this._lastName;
    };

    get age() {
        return this._age;
    };

    /* Setters */
    set name(name) {
        this._name = name;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    set age(age) {
        this._age = age;
    }

    /* Methods */
    fullName() {
        return this._name + ' ' + this._lastName;
    };

    isLegal() {
        return this._age >= 18 ? true : false;
    }

};




let john = new Persona('John', 'Doe', 20);
console.log(`El nombre del objeto es: ${john.name}`);
john.name = 'Johnnnnnnnnnnnnnnnnnnnnnnnnnn';
console.log(`El nuevo nombre del objeto es: ${john.name}`);
john.name = 'John';

console.log(john.fullName());
console.log(john.isLegal());