'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProdxPedido extends Model {
        static associate(models) {
        }
    }
    ProdxPedido.init({
        Id: DataTypes.INTEGER,
        IdProducto: DataTypes.INTEGER,
        IdPedido: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ProdxPedido',
    });
    return ProdxPedido;
};
