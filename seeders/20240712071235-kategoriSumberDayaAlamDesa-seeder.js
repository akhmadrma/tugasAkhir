'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategorisumberdayaalamdesas", [
      {
        kategorisumberdayaalamdesa: "Pertanian",
      },
      {
        kategorisumberdayaalamdesa: "Perkebunan",
      },
      {
        kategorisumberdayaalamdesa: "Peternakan",
      },
      {
        kategorisumberdayaalamdesa: "Perikanan",
      },
      {
        kategorisumberdayaalamdesa: "Bahan Galian",
      },
      {
        kategorisumberdayaalamdesa: "Sumber Daya Air",
      },
      {
        kategorisumberdayaalamdesa: "Kualitas Lingkungan",
      },
      {
        kategorisumberdayaalamdesa: "Ruang Publik",
      },
      {
        kategorisumberdayaalamdesa: "Wisata",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('kategorisumberdayaalamdesas',null,{})
  }
};
