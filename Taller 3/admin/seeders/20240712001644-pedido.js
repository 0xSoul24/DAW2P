'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Pedido', [
            {
                Id: 1,
                Fecha: new Date(),
                IdCliente: 1,
                Estado: 'En Espera',
            },
            {
                Id: 2,
                Fecha: new Date(),
                IdCliente: 2,
                Estado: 'Tansportando',
            },
            {
                Id: 3,
                Fecha: new Date(),
                IdCliente: 3,
                Estado: 'Entregado',
            },
            {
                Id: 3,
                Fecha: new Date(),
                IdCliente: 3,
                Estado: 'Retrasado',
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Pedido', null, {});
    },
};
