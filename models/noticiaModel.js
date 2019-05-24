//noticiaModel.js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let modelSchema = new Schema({

    titulo: {
        type: String,
        required: true
    },
    descripcion: String,
    categoria: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Noticia', modelSchema);