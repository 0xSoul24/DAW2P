'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('ProdxPedido', [
            {
                id: 1,
                idProducto: 1,
                idPedido: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                idProducto: 2,
                idPedido: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                idProducto: 3,
                idPedido: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                idProducto: 4,
                idPedido: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('ProdxPedido', null, {});
    },
};
