const express = require('express');
const router = express.Router();
const { Pedido, Cliente, Producto, ProdxPedido } = require('../models');

router.get('/', async (req, res) => {
    const pedidos = await Pedido.findAll({ include: [Cliente, Producto] });
    res.render('pedidos', { pedidos });
});

router.post('/new', async (req, res) => {
    const { fecha, idCliente, estado, productos } = req.body;
    const pedido = await Pedido.create({ fecha, idCliente, estado });
    productos.forEach(async prod => {
        await ProdxPedido.create({
            idprod: prod.idProducto,
            idPedido: pedido.id,
            cantidad: prod.cantidad,
            precio: prod.precio
        });
    });
    res.redirect('/pedidos');
});

module.exports = router;
