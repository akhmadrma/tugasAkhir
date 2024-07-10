'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("sumberpendapatandesas", [
      {
        sumberPendapatanDesa: "Hasil Usaha",
      },
      {
        sumberPendapatanDesa: "Hasil Aset",
      },
      {
        sumberPendapatanDesa: "Swadaya, Partisipasi dan Gotong Royong",
      },
      {
        sumberPendapatanDesa: "Pendapatan Asli Desa Lain",
      },
      {
        sumberPendapatanDesa: "Dana Desa",
      },
      {
        sumberPendapatanDesa:
          "Bagian dari hasil pajak daerah dan retribusi daerah kabupaten/kota;",
      },
      {
        sumberPendapatanDesa: "Bantuan Keuangan dari APBD Provinsi",
      },
      {
        sumberPendapatanDesa: "Bantuan Keuangan dari APBD Kabupaten/Kota",
      },
      {
        sumberPendapatanDesa: "Penerimaan dari Hasil Kerjasama Desa",
      },
      {
        sumberPendapatanDesa:
          "Penerimaan dari bantuan perusahaan yang berlokasi di Desa",
      },
      {
        sumberPendapatanDesa:
          "Penerimaan dari hibah dan sumbangan dari pihak ketiga",
      },
      {
        sumberPendapatanDesa:
          "Koreksi kesalahan belanja tahun anggaran sebelumnya yang mengakibatkan penerimaan di kas Desa pada tahun anggaran berjalan",
      },
      {
        sumberPendapatanDesa: "Bunga Bank",
      },
      {
        sumberPendapatanDesa: "Pendapatan lain Desa yang sah",
      },
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("sumberpendapatandesas", null, {});
  },
};
