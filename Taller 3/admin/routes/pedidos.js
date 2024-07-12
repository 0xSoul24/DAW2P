var express = require('express');
var router = express.Router();
module.exports = router;

const Sequelize = require('sequelize');
const Pedidos = require('../models').pedido;

router.get('/pedidos', function (req, res, next) {
    Cliente.findAll({
        attributes: { exclude: ["updatedAt"] }
    })
        .then(pedidos => {
            res.render('pedidos', { title: 'Pedidos', arrClientes: pedidos });
        })
        .catch(error => res.status(400).send(error))
});
