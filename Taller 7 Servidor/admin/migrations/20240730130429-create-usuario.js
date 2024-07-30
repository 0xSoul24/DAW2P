'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Usuarios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            usuario: {
                type: Sequelize.TEXT
            },
            nombre: {
                type: Sequelize.TEXT
            },
            apellido: {
                type: Sequelize.TEXT
            },
            id_perfil: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Perfiles',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Usuarios');
    }
};
