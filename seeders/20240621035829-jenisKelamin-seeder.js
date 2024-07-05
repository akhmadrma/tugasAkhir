"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "jeniskelamins",[
        {
          jenisKelamin: "Laki-laki",
        },
        {
          jenisKelamin: "Perempuan",
        }
      ]
    );

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("jeniskelamins", {}, null);
  },
};
