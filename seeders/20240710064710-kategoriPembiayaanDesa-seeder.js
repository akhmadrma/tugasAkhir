'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategoripembiayaandesas", [
      {
        kategoriPembiayaanDesa: "Penerimaan Pembiayaan",
      },
      {
        kategoriPembiayaanDesa: "Pengeluaran Pembiayaan",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kategoripembiayaandesas", null, {});
  },
};
