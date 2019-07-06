'use strict';

const tbody = document.querySelector('#tbl_contactos tbody');
let lcont = [];

let mostarTabla = (lcont) => {
    var data = lcont.data.lista_contactos;
    try {
        tbody.innerHTML = "";
        for (var i = 0; i < data.length; i++) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = data[i]['nombre'];
            fila.insertCell().innerHTML = data[i]['correo'];
            fila.insertCell().innerHTML = data[i]['nacimiento'];
            fila.insertCell().innerHTML = data[i]['comentario'];
        }
    }
    catch(err){
        throw new Error(err);
    }
    
}
