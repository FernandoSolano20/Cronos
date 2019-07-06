'use strict'

const express = require('express'),
    router = express.Router(),
    Propiedad = require('../models/propiedad.model');

//Definir la ruta para registar contactos
//empizan con / por estandar
//- en el medio por standar
router.post('/registrar-propiedad', function(req, res){
    let body = req.body;
    
    let nuevo_propiedad =  new Propiedad({
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

router.get('/listar-propiedades', function(req, res){
    Propiedad.find(function(err, propiedadBD){
        if(err){
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las propiedades',
                err
            });
        }else{
            return res.json({
                success: true,
                lista_propiedadess: propiedadBD
            })
        }
    });
});


module.exports = router;