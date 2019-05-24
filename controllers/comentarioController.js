//comentarioController.js
require('../models/noticiaModel');
let Comentario = require('../models/comentarioModel');
let Noticia = require('../models/noticiaModel');

module.exports = {

    show: (req, res) => {
        Noticia.find({}, (err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                // res.render('blog', { lista: data });
                res.render('blog', {lista: data} ,(err, html) => {
                    if (err) throw err;
                    res.render('blogs/layout', {
                        tituloSeccion: 'Publicaciones',
                        seccion: html
                    });
                    // console.log(data);
                });
                // res.json(data);
            }
        });
    },

    detail: (req,res) => {

        let id_noti = req.params.id;        

        Comentario.find({ noticia : id_noti }, (err,data) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            if (!data) {
                return res.status(500).json({
                    ok: false,
                    err: {
                        message: 'EL id no es correcto'
                    }
                });
            }

            Noticia.findOne({ _id: id_noti }, function(err, noticia) {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                } else {
                    res.render('comentarios', {lista: data, id_noti:id_noti, noticia:noticia} ,(err, html) => {
                        if (err) throw err;
                        res.render('blogs/layout', {
                            tituloSeccion: 'Comentarios',
                            seccion: html
                        });
                        // console.log(data);
                    });
                }
            });

            // res.json({
            //     ok: true,
            //     data
            // });

        });
    },
    
    create: (req, res) => {

        let body = req.body;

        let obj = new Comentario({
            autor : body.autor,
            comentario : body.comentario,
            fecha : body.fecha,
            noticia : body.noticia_id
        });

        // console.log(obj);
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
    },

};