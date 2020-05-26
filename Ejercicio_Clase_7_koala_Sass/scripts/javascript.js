boton = document.getElementById('boton');
body = document.getElementById('body');

let isdark;
boton.addEventListener("click", function() {
    if(isdark === true) {
        body.style.backgroundColor = "whitesmoke";
        body.style.color = "black";
        isdark = false;
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        isdark = true;
    }
});

