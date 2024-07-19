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
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
        idProducto: DataTypes.INTEGER,
        idPedido: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ProdxPedido',
    });
    return ProdxPedido;
};
