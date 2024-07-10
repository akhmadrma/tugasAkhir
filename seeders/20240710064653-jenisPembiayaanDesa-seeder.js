'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("jenispembiayaandesas", [
      {
        jenisPembiayaanDesa: "SilPA Tahun Sebelumnya",
      },
      {
        jenisPembiayaanDesa: "Pencairan Dana Cadangan",
      },
      {
        jenisPembiayaanDesa:
          "Hasil penjualan kekayaan Desa yang dipisahkan kecuali tanah dan bangunan",
      },
      {
        jenisPembiayaanDesa: "Pembentukan Dana Cadangan",
      },
      {
        jenisPembiayaanDesa: "Penyertaan Modal",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("jenispembiayaandesas", null, {});
  },
};
