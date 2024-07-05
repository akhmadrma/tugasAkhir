'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("shdks", [
      {
        shdk: "Kepala Keluarga",
      },
      {
        shdk: "Suami",
      },
      {
        shdk: "Istri",
      },
      {
        shdk: "Anak",
      },
      {
        shdk: "Menantu",
      },
      {
        shdk: "Cucu",
      },
      {
        shdk: "Orangtua",
      },
      {
        shdk: "Mertua",
      },
      {
        shdk: "Famili Lain",
      },
      {
        shdk: "Pembantu",
      },
      {
        shdk: "Lainnya",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("shdks", {}, null);
  }
};
