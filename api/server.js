const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//Se declaran todos los accesos de los archivos routes.
//aqui incorporamos la rua
const contacto_route = require('./routes/contacto');
const propiedad_route = require('./routes/propiedad');


const app = express();//app => para maniplar cpnfig de rutas y urls manipular los origenes
//instancia de un objecto de express
app.use(cors());//recibir mejs de diferentes dominios
app.use(express.static(__dirname + "/public"));//static para que 
//que este levantado y en public porque aqui esta el html y todo eso
app.use(bodyParser.json());//que maneje todo en json
app.use(bodyParser.urlencoded({ extended: false }));//podamos enviar datos en form para hacer nombre valor nombre valor
app.use(function(req, res, next) {/*que lo que va en los encabezados*/
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');//verbos
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);//para los credenciales
    next();
});
// Se crea variable db para ser reutilizada en el "callback". callback llamada de un fun
let db;
//Se conecta la base de datos antes de levantar el servidor, mediante los datos del archivo .env en la raiz del proyecto.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, function(err, database) {
    if (err) {//https://www.mongodb.com/cloud
        console.log(err);
        process.exit(1);
    }
    //Guarda el objeto db para que el callback la pueda reutilizar.
    db = database;
    console.log("Se estableció la conexión con la base datos.");
    // Se inicia la aplicacion.
    const server = app.listen(process.env.PORT || 8000, function() {
        let port = server.address().port;
        console.log("La aplicación está levantada en el puerto: ", port);
    });
});
//Error general en caso de que falle un "endpoint".
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}
// Conexion a todas la rutas.
//solo falta que la use dentro de la app
app.use('/api', contacto_route);
app.use('/api', propiedad_route);