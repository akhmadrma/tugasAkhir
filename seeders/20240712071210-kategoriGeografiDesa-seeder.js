'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("kategorigeografidesas", [
      {
        kategoriGeografiDesa: "Nama Desa",
      },
      {
        kategoriGeografiDesa: "Kode Wilayah",
      },
      {
        kategoriGeografiDesa: "Kode Pos",
      },
      {
        kategoriGeografiDesa: "Kecamatan",
      },
      {
        kategoriGeografiDesa: "Kabupaten/Kota",
      },
      {
        kategoriGeografiDesa: "Provinsi",
      },
      {
        kategoriGeografiDesa: "Koordinat",
      },
      {
        kategoriGeografiDesa: "Batas Utara",
      },
      {
        kategoriGeografiDesa: "Batas Selatan",
      },
      {
        kategoriGeografiDesa: "Batas Barat",
      },
      {
        kategoriGeografiDesa: "Batas Timur",
      },
      {
        kategoriGeografiDesa: "Luas Wilayah",
      },
      {
        kategoriGeografiDesa: "Jarak dari Pusat Pemerintahan Kecamatan",
      },
      {
        kategoriGeografiDesa: "Jarak dari Pusat Pemerintahan Kabupaten/Kota",
      },
      {
        kategoriGeografiDesa: "Jarak dari Pusat Pemerintahan Provinsi",
      },
      {
        kategoriGeografiDesa: "Jarak dari Pusat Pemerintahan Pusat",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("kategorigeografidesas",null,{})
  }
};
