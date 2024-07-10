'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategoripendapatandesas", [
      {
        kategoriPendapatanDesa: "Pendapatan Asli Desa",
      },
      {
        kategoriPendapatanDesa: "Transfer",
      },
      {
        kategoriPendapatanDesa: "Pendapatan Lain",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kategoripendapatandesas",null,{})
  }
};
