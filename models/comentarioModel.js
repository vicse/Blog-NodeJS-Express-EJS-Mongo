//comentarioModel.js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let comentarioSchema = new Schema({

    autor :{
        type: String
    },

    comentario : { 
        type: String
    },

    fecha : {
        type: String
    },

    noticia : {
        type: Schema.Types.ObjectId,
        ref: 'Noticia',
        required: [true, 'EL id de la noticia es necesario']
    }

});

module.exports = mongoose.model('Comentario', comentarioSchema);