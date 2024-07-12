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
        Id: DataTypes.INTEGER,
        Fecha: DataTypes.DATE,
        IdCliente: DataTypes.INTEGER,
        Estado: DataTypes.ENUM('En Espera','Transportando','Entregado','Retrasado'),
    }, {
        sequelize,
        modelName: 'Pedido',
    });
    return Pedido;
};
