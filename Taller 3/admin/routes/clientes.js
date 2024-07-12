var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Cliente = require('../models').cliente;

router.get('/clientes', function (req, res, next) {
    Cliente.findAll({
        attributes: { exclude: ["updatedAt"] }
    })
        .then(clientes => {
            res.render('clientes', { title: 'Clientes', arrClientes: clientes });
        })
        .catch(error => res.status(400).send(error))
});

module.exports = router;
