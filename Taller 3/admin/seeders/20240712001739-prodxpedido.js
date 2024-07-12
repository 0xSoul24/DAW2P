'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('ProdxPedido', [
            {
                Id: 1,
                IdProducto: 1,
                IdPedido: 1,
            },
            {
                Id: 2,
                IdProducto: 2,
                IdPedido: 2,
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('ProdxPedido', null, {});
    },
};
