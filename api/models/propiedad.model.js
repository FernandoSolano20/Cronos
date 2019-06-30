'use strict'

const mongoose = require('mongoose');

//Esquema del contacto
//creo un nuevo esquema de mongoose
let propiedad_schema = new mongoose.Schema({
    propiedad: {type: String, required: true, unique: false },
    provincia: {type: String, required: true, unique: false },
    canton: {type: String, required: true, unique: false },
    precio: {type: Number, required: true, unique: false }
});


module.exports= mongoose.model("Propiedad", propiedad_schema);