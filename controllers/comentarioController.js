//comentarioController.js
require('../models/noticiaModel');
let model = require('../models/comentarioModel');

module.exports = {
    
    create: function(req, res) {

        let body = req.body;

        let obj = new model;
        obj.comentario = body.comentario;
        obj.noticia_id = body.noticia_id;

        obj.save((err, comentarioDB) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                comentario: comentarioDB
            });
            
        }); 
    }    
};