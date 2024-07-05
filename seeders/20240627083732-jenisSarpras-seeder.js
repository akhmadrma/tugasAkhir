"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategorisarpras", [
      {
        kategori: "Umum",
      },
      {
        kategori: "Pendidikan",
      },
      {
        kategori: "Kesehatan",
      },
      {
        kategori: "Ibadah",
      },
      {
        kategori: "Lainnya",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kategorisarpras", {}, null);
  },
};
