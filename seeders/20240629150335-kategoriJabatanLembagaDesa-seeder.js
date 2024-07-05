"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategorijabatanlembagadesas", [
      {
        kategoriJabatan: "Ketua",
      },
      {
        kategoriJabatan: "Sekretaris",
      },
      {
        kategoriJabatan: "Bendahara",
      },
      {
        kategoriJabatan: "Anggota",
      },
      {
        kategoriJabatan: "Lainya",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kategorijabatandesas", {}, null);
  },
};
