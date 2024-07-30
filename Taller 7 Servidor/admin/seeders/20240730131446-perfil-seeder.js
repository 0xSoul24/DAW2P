'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Perfiles', [
            { descripcion: 'Admin', estado: 'activo' },
            { descripcion: 'Supervisor', estado: 'activo' },
            { descripcion: 'Operador', estado: 'activo' },
            { descripcion: 'Cliente', estado: 'activo' }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Perfiles', null, {});
    }
};
