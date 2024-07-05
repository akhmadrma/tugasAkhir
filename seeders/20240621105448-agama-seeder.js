'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("agamas", [
      {
        agama: "Islam",
      },
      {
        agama: "Kristen",
      },
      {
        agama: "Katolik",
      },
      {
        agama: "Hindu",
      },
      {
        agama: "Budha",
      },
      {
        agama: "Khonghucu",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("agamas", {}, null);
  }
};
