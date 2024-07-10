'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategoriperistiwakeamanans", [
      {
        kategoriPeristiwaKeamanan: "Operasi Keamanan",
      },
      {
        kategoriPeristiwaKeamanan: "Pencurian",
      },
      {
        kategoriPeristiwaKeamanan: "Pemerkosaan",
      },
      {
        kategoriPeristiwaKeamanan: "Kenakalan Remaja",
      },
      {
        kategoriPeristiwaKeamanan: "Pembunuhan",
      },
      {
        kategoriPeristiwaKeamanan: "Perampokan",
      },
      {
        kategoriPeristiwaKeamanan: "Penipuan",
      },
      {
        kategoriPeristiwaKeamanan: "Tindak Kekerasan",
      },
      {
        kategoriPeristiwaKeamanan: "Penyalahgunaan Zat dan Obat Terlarang",
      },
      {
        kategoriPeristiwaKeamanan: "Tindak Kriminalitas Lainya",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('kategoriperistiwakeamanan',null,{})
  }
};
