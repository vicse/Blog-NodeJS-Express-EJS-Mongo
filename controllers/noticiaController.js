//noticiaController.js
let model = require('../models/noticiaModel');
module.exports = {
    show: function(req, res) {
        model.find({}, (err, data) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.json(data);
            }
        });
    },
    detail: function(req, res) {
        let val_id = req.params.id;
        model.findOne({ _id: val_id }, function(err, data) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.json(data);
            }
        });
    },
    create: function(req, res) {

        model.find({}, '_id', { sort: { _id: -1 }, limit: 1 }, (err, data) => {

            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {

                last_id = parseInt(data[0]._id);
                newId = last_id + 1;

                //console.log(newId); mueestra el nuedo id a crear

                let obj = new model;
                obj._id = newId;
                obj.titulo = req.body.titulo;
                obj.descripcion = req.body.descripcion;
                obj.categoria = req.body.categoria;
                obj.fecha = req.body.fecha;
                obj.save(function(err, newData) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        res.json(newData);
                    }
                });

            }

        });
    },
    update: function(req, res) {
        let val_id = req.body.id;
        let datos = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            fecha: req.body.fecha
        };
        model.updateOne({ _id: val_id }, datos, function(err, newData) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.json(newData);
            }
        });
    }, 
    delete: function(req, res) {
        let id = req.body.id;

        model.findByIdAndRemove(id, (err, noticiaBorrada) => {

            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (!noticiaBorrada) {
                res.json({
                    message: 'No se encontro el ID'
                });
            } else {
                res.json({
                    message: 'La noticia ah sido borrada',
                    noticiaBorrada
                });
            }

        });
    }
};