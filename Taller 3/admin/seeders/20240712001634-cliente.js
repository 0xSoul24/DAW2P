'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Clientes', [
            {
                id: 1,
                nombre: 'Juan',
                apellido: 'Gómez',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                nombre: 'María',
                apellido: 'López',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                nombre: 'Pepito',
                apellido: 'Pacheco',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                nombre: 'José',
                apellido: 'Pacheco',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Cliente', null, {});
    },
};
