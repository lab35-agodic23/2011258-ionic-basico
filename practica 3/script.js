let usuarioTxt = document.getElementById("usuario");

let p = document.getElementById("mensaje"); //parrafo

let passwordTtx = document.getElementById("password");

function login(){
    //Login aqui
    p.innerHTML = "Login Correcto, " + usuarioTxt.value; //cambia el texto en el parrafo

    limpiar();
}

function registro(){
    //Registro aqui
    p.innerHTML = "Registro con éxito, " + usuarioTxt.value; //cambia el texto en el parrafo

    limpiar();
}

function limpiar(){
    usuarioTxt.value = "";
    passwordTtx.value = "";
}