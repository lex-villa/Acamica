let fondosRemitente = 100;
let fondosDestinatario = 0;
let destinatarios = ["Juan Perez", "Adriana", "Miguel", "Sofia", "Ale"];


const depositar = () => {
    let importe = parseInt(prompt("Ingresa la cantidad a tranferir: "));
    let nombreDestinatario = prompt("Ingresa el nombre de a quien depositas: ");

    let mismoNombre = esDestinatario(nombreDestinatario);
    alert(mismoNombre);
    while((importe > fondosRemitente) || (mismoNombre == false)) {
        if(importe > fondosRemitente) {
            importe = parseInt(prompt("No tienes tanto dinero, ingresa otro importe: "));
        } 

        if (mismoNombre == false) {
            nombreDestinatario = prompt("A quien quieres depositar no existe, ingresa otro nombre: ");
            mismoNombre = esDestinatario(nombreDestinatario);
        }
    }

    alert('Transeferencia exitosa');
}

const esDestinatario = destinatario => {
    let seEncontro = destinatarios.find(element => {
        if(element == destinatario) {
            return element;
        }
    });
    alert(seEncontro)
    if(seEncontro == destinatario) {
        return true;
    } else {
        return false
    }
}

depositar();


const suma = (valor1, valor2) => typeof(valor1) == "number" && typeof(valor2) == "number" ? valor1 + valor2 : false;