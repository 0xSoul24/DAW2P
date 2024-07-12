'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Cliente', [
            {
                Id: 1,
                Nombre: 'Juan Pérez',
                Apellido: 'Gómez',
            },
            {
                Id: 2,
                Nombre: 'María González',
                Apellido: 'López',
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Cliente', null, {});
    },
};
