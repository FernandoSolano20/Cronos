'use strict';

let registrarContacto = (pnombre, pcorreo, pfecha, pcomentario) => {
  axios({
    method: 'post',
    url: 'http://localhost:4000/api/registrar-contacto',
    responseType: 'json',
    data: {
      nombre: pnombre,
      correo: pcorreo,
      nacimiento: pfecha,
      comentario: pcomentario
    }
  });
};

let listarContactos = () => {
  axios({
    method: 'get',
    url: 'http://localhost:4000/api/listar-contactos',
    responseType: 'json'
  })
    .then(mostarTabla)
    .catch(e => requestError(e, 'datos'));

};


listarContactos();