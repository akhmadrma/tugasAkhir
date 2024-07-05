"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("pendidikanterakhirs", [
      {
        pendidikanTerakhir: "Taman Kanak-kanak",
      },
      {
        pendidikanTerakhir: "Sekolah Dasar",
      },
      {
        pendidikanTerakhir: "SMP atau Sederatjat",
      },
      {
        pendidikanTerakhir: "SMA atau Sederajat",
      },
      {
        pendidikanTerakhir: "Akademi atau D1-D3",
      },
      {
        pendidikanTerakhir: "Sarjana",
      },
      {
        pendidikanTerakhir: "Pasca Sarjana",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("pendidikanterakhirs", {}, null);
  },
};
