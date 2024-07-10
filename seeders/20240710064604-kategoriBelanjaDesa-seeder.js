'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategoribelanjadesas", [
      {
        kategoriBelanjaDesa: "Penyelenggaraan pemerintahan Desa",
      },
      {
        kategoriBelanjaDesa: "Pelaksanaan pembangunan Desa",
      },
      {
        kategoriBelanjaDesa: "Pembinaan Kemasyarakatan Desa",
      },
      {
        kategoriBelanjaDesa: "Pemberdayaan Masyarakat Desa",
      },

      {
        kategoriBelanjaDesa: "Penanggulangan Bencana, Keadaan Darurat, Keadaan Mendesak Desa",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kategoribelanjadesas", null, {});
  },
};
