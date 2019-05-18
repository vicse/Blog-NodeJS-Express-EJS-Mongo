//comentarioModel.js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let modelSchema = new Schema({
    comentario : { type: String , required: true },
    noticia_id : { type: Schema.ObjectId , ref: 'noticias' , required: true },
});
let model = mongoose.model('comentario',modelSchema,'comentario');
module.exports = model;