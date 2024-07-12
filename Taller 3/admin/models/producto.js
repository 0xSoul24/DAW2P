'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Producto extends Model {
        static associate(models) {
        }
    }
    Producto.init({
        Id: DataTypes.INTEGER,
        Descripción: DataTypes.TEXT,
        Stock: DataTypes.BOOLEAN,
        Precio: DataTypes.DECIMAL
    }, {
        sequelize,
        modelName: 'Producto',
    });
    return Producto;
};
