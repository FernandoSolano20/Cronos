'use strict'

const express = require('express'),
    router = express.Router(),//permite crear la ruta
    Contacto = require('../models/contacto.model');

//Definir la ruta para registar contactos
//empizan con / por estandar
//- en el medio por standar
//router nos permite como hacer el enrutameiento dependiendo
//un solo documento por lo que se pone sinular

router.post('/registrar-contacto', function(req, res){
    /*req lo que recibo y response lo que respondo */
    let body = req.body;
    
    /*lo de la izquierda tiene que estar exactamente igual al modelo*/
    let nuevo_contacto =  new Contacto({
        nombre: body.nombre,
        correo: body.correo,
        nacimiento: body.nacimiento,
        comentario: body.comentario
    });

    nuevo_contacto.save(
        function(err,contactoDB/*este contacto ya se mando*/){
            if(err){
                return res.status(400).json({
                    success: false,
                    msj: 'El contacto no se pudo guardar',
                    err
                });
            }else{
                return res.json({
                    success: true,
                    msj: 'El contacto se guardó con éxito'
                })
            }
        }
    );
});

router.get('/listar-contactos', function(req, res){
    Contacto.find(function(err, contactosBD /*plural*/){
        if(err){
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los contactos',
                err
            });
        }else{
            return res.json({
                success: true,
                lista_contactos: contactosBD
            })
        }
    });
});


module.exports = router;//middleware function error es porque no se exporta router