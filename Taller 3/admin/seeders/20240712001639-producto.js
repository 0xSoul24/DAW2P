'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Productos', [
            {
                id: 1,
                descripción: 'Camisa azul',
                stock: true,
                precio: 25.00,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                descripción: 'Pantalón negro',
                stock: false,
                precio: 30.00,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                descripción: 'Bufanda Amarilla',
                stock: false,
                precio: 30.00,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                descripción: 'Medias Negras',
                stock: false,
                precio: 30.00,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Producto', null, {});
    },
};
