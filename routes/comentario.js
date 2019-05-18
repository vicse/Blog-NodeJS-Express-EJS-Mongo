//comentario.js
var express = require('express');
var controller = require('../controllers/comentarioController');
var router = express.Router();

router.get('/', (req, res, next) => {
    controller.show(req,res);
});

router.get('/detail/:id', (req, res, next) => {
    controller.detail(req,res);
});

router.post('/', (req, res, next) => {
    controller.create(req,res);
})

module.exports = router;
  