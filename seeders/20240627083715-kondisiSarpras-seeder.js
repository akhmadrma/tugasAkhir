'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kondisisarpras", [
      {
        kondisi: "Aktif",
      },
      {
        kondisi: "Non-Aktif",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kondisisarpras",{},null)
  }
};
