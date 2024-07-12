var express = require('express');
var router = express.Router();
module.exports = router;

const Sequelize = require('sequelize');
const Productos = require('../models').producto;

router.get('/productos', function (req, res, next) {
    Cliente.findAll({
        attributes: { exclude: ["updatedAt"] }
    })
        .then(productos => {
            res.render('productos', { title: 'Productos', arrClientes: productos });
        })
        .catch(error => res.status(400).send(error))
});
