"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategoriperistiwabencanas", [
      {
        kategoriPeristiwaBencana: "Bencana Alam",
      },
      {
        kategoriPeristiwaBencana: "Bencana Non-Alam",
      },
      {
        kategoriPeristiwaBencana: "Bencana Sosial",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kategoriperistiwabencanas", null, {});
  },
};
