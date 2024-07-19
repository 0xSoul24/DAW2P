'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pedido extends Model {
        static associate(models) {
        }
    }
    Pedido.init({
        id: DataTypes.INTEGER,
        fecha: DataTypes.DATE,
        idCliente: DataTypes.INTEGER,
        estado: DataTypes.ENUM('En Espera','Transportando','Entregado','Retrasado'),
    }, {
        sequelize,
        modelName: 'Pedido',
    });
    return Pedido;
};
