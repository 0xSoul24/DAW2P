const express = require('express');
const router = express.Router();
const { Pedido, Cliente } = require('../models');

router.get('/', async (req, res) => {
    const pedidos = await Pedido.findAll({
        include: [{ model: Cliente, as: 'cliente' }]
    });
    res.render('pedidos', { pedidos });
});

router.post('/', async (req, res) => {
    await Pedido.create({
        fecha: req.body.fecha,
        clienteId: req.body.clienteId,
        estado: req.body.estado
    });
    res.redirect('/pedidos');
});

module.exports = router;