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
        id: DataTypes.INTEGER,
        descripción: DataTypes.TEXT,
        stock: DataTypes.BOOLEAN,
        precio: DataTypes.DECIMAL
    }, {
        sequelize,
        modelName: 'Producto',
    });
    return Producto;
};
