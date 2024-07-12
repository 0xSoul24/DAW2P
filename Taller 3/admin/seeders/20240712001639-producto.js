'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Producto', [
            {
                Id: 1,
                Descripción: 'Camisa azul',
                Stock: true,
                Precio: 25.00,
            },
            {
                Id: 2,
                Descripción: 'Pantalón negro',
                Stock: false,
                Precio: 30.00,
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Producto', null, {});
    },
};
