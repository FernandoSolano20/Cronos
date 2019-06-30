'use strict';
//variables constantes y globales
const botonEnviar = document.querySelector("#btn-enviar");
//la referencia no se modifica por eso es constante
const inputNombre = document.querySelector("#txt-nombre");
const inputCorreo = document.querySelector("#txt_correo");
const inputNacimiento = document.querySelector("#txt-nacimiento");
const inputComentario = document.querySelector("#txt_comentario");

let validar = (pNombre,pCorreo,pFecha,pComentario) =>{
    let error = false;

    //https://sweetalert2.github.io/
    if(pNombre === ""){
        error = true;
        inputNombre.classList.add("input-error");
    }
    else{
        inputNombre.classList.remove("input-error");
    }

    if(pCorreo === ""){
        error = true;
        inputCorreo.classList.add("input-error");
    }
    else{
        inputCorreo.classList.remove("input-error");
    }

    if(pFecha == "Invalid Date"){
        error = true;
        inputNacimiento.classList.add("input-error");
    }
    else{
        inputNacimiento.classList.remove("input-error");
    }

    if(pComentario === ""){
        error = true;
        inputComentario.classList.add("input-error");
    }
    else{
        inputComentario.classList.remove("input-error");
    }
    
    return error;
};

let saludar = (/*parametros*/) => {
    let nombre = inputNombre.value;
    let correo = inputCorreo.value;
    let fecha = new Date(inputNacimiento.value);
    let fecha_formateada = fecha.getUTCDate() + "/" + (fecha.getUTCMonth()+1) + "/" + fecha.getFullYear();
    let comentario = inputComentario.value;

    let error = validar(nombre,correo,fecha,comentario);

    if(!error){
        console.log(`Hola ${nombre} mucho gusto`);
        console.log(`Su correo es ${correo}`);// console.log("Su correo es " + correo);
        console.log(`Su fecha de nacimiento es ${fecha_formateada}`);
        console.log(`Su comentario es ${comentario}`);
        Swal.fire( {
                //json format
                type:'success',
                title: 'Se ha enviado su mensaje exitosamente',
                text:'Nos pondremos en contacto con usted, tan pronto sea posible'
        });
    }
    else{
        Swal.fire( {
            //json format
            type:'warning',
            title: 'No se ha enviado su mensaje exitosamente',
            text:'Revise los campos resaltados e intételo de nuevo'
        });
    }
    
};

botonEnviar.addEventListener("click", saludar);
//event listener no puede leer los objetos nulos
//algo nulo no se puede leer
/*que alguien lo va a vigilar, evento que esta observando es el evento click voy a llamar a una funcion
*/