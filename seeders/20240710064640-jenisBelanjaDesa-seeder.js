"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("jenisbelanjadesas", [
      {
        jenisBelanjaDesa: "Belanja Pegawai",
      },
      {
        jenisBelanjaDesa: "Belanja Barang/Jasa",
      },
      {
        jenisBelanjaDesa: "Belanja Modal",
      },
      {
        jenisBelanjaDesa: "Belanja tak Terduga",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("jenisbelanjadesas", null, {});
  },
};
