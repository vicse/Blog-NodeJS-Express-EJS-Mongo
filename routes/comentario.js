//comentario.js
var express = require('express');
var controllerHistoria = require('../controllers/noticiaController');
var controller = require('../controllers/comentarioController');
var router = express.Router();

router.get('/', function(req, res, next) {
   controller.show(req,res);
});

router.get('/listar', (req, res, next) => {
    controllerHistoria.show(req,res);
});

router.get('/detail/:id', (req, res, next) => {
    controller.detail(req,res);
});

router.post('/crear', (req, res, next) => {
    controller.create(req,res);
})

module.exports = router;
  