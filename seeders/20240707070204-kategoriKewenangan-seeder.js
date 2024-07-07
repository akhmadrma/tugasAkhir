'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategorikewenangans", [
      {
        kategoriKewenangan: "Peraturan Desa",
      },
      {
        kategoriKewenangan: "Tugas atau Program Pemerintah Pusat",
      },
      {
        kategoriKewenangan: "Tugas atau Program Pemerintah Provinsi",
      },
      {
        kategoriKewenangan: "Tugas atau Program Pemerintah Kabupaten",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kategorikewenangas", {}, null);
  }
};
