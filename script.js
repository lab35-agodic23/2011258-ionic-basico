var miPrimerVariable= 'hola,mundo';

var campoTexto= document.getElementById('mitexto1');


function mostrarAlerta(){
    alert( campoTexto.value);
}

function limpiarTexto (){
    campoTexto.value=null;
}