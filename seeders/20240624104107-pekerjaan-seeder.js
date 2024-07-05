'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("pekerjaans", [
      {
        pekerjaan: "PNS/ASN",
      },
      {
        pekerjaan: "Karyawan Swasta",
      },
      {
        pekerjaan: "Petani",
      },
      {
        pekerjaan: "Nelayan",
      },
      {
        pekerjaan: "Buruh",
      },
      {
        pekerjaan: "Ibu Rumah Tangga",
      },
      {
        pekerjaan: "Pensiynan",
      },
      {
        pekerjaan: "Pelajar/Mahasiswa",
      },
      {
        pekerjaan: "Tenaga Kerja Informal",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete("pekerjaans", {}, null);
  }
};
