'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("statuses", [
      {
        status: "Belum Kawin",
      },
      {
        status: "Kawin Belum Tercatat",
      },
      {
        status: "Kawin Tercatat",
      },
      {
        status: "Cerai Hidup",
      },
      {
        status: "Cerai Mati",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("statuses", {}, null);
  }
};
