'use strict'

const express = require('express'),
    router = express.Router(),
    Contacto = require('../models/propiedad.model');

//Definir la ruta para registar contactos
//empizan con / por estandar
//- en el medio por standar
router.post('/registrar-propiedad', function(req, res){
    let body = req.body;
    
    let nuevo_propiedad =  new Contacto({
        propiedad: body.propiedad,
        provincia: body.provincia,
        canton: body.canton,
        precio: body.precio
    });

    nuevo_propiedad.save(
        function(err,propiedadDB){
            if(err){
                return res.status(400).json({
                    success: false,
                    msj: 'La propiedad no se pudo guardar',
                    err
                });
            }else{
                return res.json({
                    success: true,
                    msj: 'El propiedad se guardó con éxito'
                })
            }
        }
    );
});


module.exports = router;