"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("jenispenghasilanaparaturs", [
      {
        jenisPenghasilan: "Penghasilan Utama",
      },
      {
        jenisPenghasilan: "Tunjangan",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('jenispenghasilanaparaturs',{},null)
  },
};
