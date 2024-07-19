'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Pedidos', [
            {
                id: 1,
                fecha: new Date(),
                idCliente: 1,
                estado: 'En Espera',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                fecha: new Date(),
                idCliente: 2,
                estado: 'Tansportando',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                fecha: new Date(),
                idCliente: 3,
                estado: 'Entregado',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                fecha: new Date(),
                idCliente: 4,
                estado: 'Retrasado',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Pedido', null, {});
    },
};
