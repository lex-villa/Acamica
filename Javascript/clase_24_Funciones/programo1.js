class User {
    /* Properties */
    constructor(name, lastName, email, nickName, password) {
        this._name = name;
        this._lastName = lastName;
        this._email = email;
        this._nickName = nickName;
        this._password = password;
        this._status = true;
    }

    /* Setters */
    set name(name) {
        this._name = name;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    set email(email) {
        this._email = email;
    }
    set nickName(nickName) {
        this._nickName = nickName;
    }
    set password(password) {
        this._password = password;
    }
    set status(status) {
        this._status = status;
    }

    /* Getters */
    get name() {
        return this._name;
    }
    get lastName() {
        return this._lastName;
    }
    get email() {
        return this._email;
    }
    get nickName() {
        return this._nickName;
    }
    get password() {
        return this._password;
    }
    get status() {
        return this._status;
    }

    /* Methods */
};








/* Functions */
/* Create an instance of class User with data provided from a real user*/
const createUser = () => {
    let name = prompt('Ingresa tu nombre: ');
    let lastName = prompt('Ingresa tu apellido: ');
    let email = prompt('Ingresa tu email');
    let nickName = prompt('Ingresa tu nombre de usuario');
    let password = prompt('Ingresa tu contraseña');

    return new User(name, lastName, email, nickName, password);
};

/* Take an object as input and decides, if the object doesn't exist already, it will push it to the
array of users. Otherwise it will trow an error */
const addUser = newObject => {
    try {
        if (arrUsers.find(element => element.email == newObject.email)) {
            throw Error(`El usuario ya existe`);
        } else {
            arrUsers.push(newObject);
        };
        /* Validar con for in los espacios nullos o vacios*/
        /*if()*/
    }
    catch (error) {
        console.log(error);
    }
};

/* Solo permite loguear personas con el usuario y
contraseña correcto y que tengan su usuario activo. */
const login = () => {
    let user = prompt('Ingresa tu usuario registrado');
    let pass = prompt('Ingresa tu contraseña registrada');

    try {
        if (arrUsers.find(element => (element.nickName == user) && (element.password == pass) && (element.status == true))) {
            console.log('Te has logueado con éxito, prro');
            isLogued = true;
        } else {
            throw Error('No estas registrado o tu contraseña esta mal o estas dado de baja, mejor date de baja de la vida');
        }
    }
    catch (error) {
        console.log(error);
    }
};

/* Crea una nueva función que permita modificar un usuario.
Recibe su nombre de usuario y busca si existe.
- Si no existe, informa este error a través de un alert.
- Si existe, solicita todos los datos a través del prompt y
reemplaza el objeto con la nueva información.
 */
const modUser = userNickName => {
    try {
        if (arrUsers.find(element => element.nickName == userNickName)) {
            let index = arrUsers.findIndex(element => element.nickName == userNickName);

            let name = prompt('Ingresa nuevo nombre: ');
            let lastName = prompt('Ingresa nuevo apellido: ');
            let email = prompt('Ingresa nuevo email');
            let nickName = prompt('Ingresa tu nuevo nombre de usuario');
            let password = prompt('Ingresa tu nueva contraseña');

            arrUsers[index].name = name;
            arrUsers[index].lastName = lastName;
            arrUsers[index].email = email;
            arrUsers[index].nickName = nickName;
            arrUsers[index].password = password;

        } else {
            throw Error('El usuario no existe, men');
        }
    }
    catch (error) {
        alert(error);
    }
}





/* */
const addOtherUser = () => {
    if(addUserPrompt) {
        addUser(createUser());
    } else {
        return;
    };

    addUserPrompt = confirm('Quieres agregar otro usuario?');
    addOtherUser();
};

/* */
const wantLogin = () => {
    if(wantLoginPrompt) {
        login();
    } else {
        return;
    };

    if(isLogued) {
        return;
    };

    wantLoginPrompt = confirm('Quieres intentar loguearte de nuevo?');
    wantLogin();
};

/* */
const wantMod = () => {
    if(wantModPrompt) {
        let userPrompt = prompt('Escribe el nombre de usuario que hayas registrado: ');
        modUser(userPrompt);
    } else {
        return;
    }
    
    wantModPrompt = confirm('Quieres modificar este u otro usuario?');
    wantMod();
};
















/* Main Program */
arrUsers = [
    { name: 'Pedrito', lastName: 'Sola', email: 'pedro@mail.com', nickName: 'el mayonesas', password: '123mayonesa', status: false },
    { name: 'Bruce', lastName: 'Wayne', email: 'batman@mail.com', nickName: 'el murcielago', password: '123bat', status: true },
];

let addUserPrompt = confirm('Quieres agregar a un usuario?');
addOtherUser();
console.log(arrUsers);

let wantLoginPrompt = confirm('Quieres loguearte?');
let isLogued = false;
wantLogin();

let wantModPrompt = confirm('Quieres modificar un usuario?');
wantMod();
console.log(arrUsers);