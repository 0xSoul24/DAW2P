'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cliente extends Model {
        static associate(models) {
        }
    }
    Cliente.init({
        Id: DataTypes.INTEGER,
        Nombre: DataTypes.TEXT,
        Apellido: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Cliente',
    });
    return Cliente;
};
