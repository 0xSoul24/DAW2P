'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        static associate(models) {
        }
    }
    usuario.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        usuario: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        nombre: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        apellido: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        id_perfil: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Perfiles',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Usuario',
        tableName: 'Usuarios',
        timestamps: false
    });
    return Usuario;
};
