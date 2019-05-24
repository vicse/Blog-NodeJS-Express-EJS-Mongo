//noticia.js
var express = require('express');
var controller = require('../controllers/noticiaController');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('noticia', function(err, html) {
        if (err) throw err;
        res.render('layouts/layout', {
            tituloSeccion: 'Noticia',
            seccion: html
        });
    });
});

router.get('/listar', function(req, res, next) {
    controller.show(req, res);
});

router.get('/detalle/:id', function(req, res, next) {
    controller.detail(req, res);
});

router.post('/crear', function(req, res, next) {
    controller.create(req, res);
});

router.post('/actualizar', function(req, res, next) {
    controller.update(req, res);
});

router.post('/eliminar', function(req, res, next) {
    controller.delete(req, res);
});

module.exports = router;