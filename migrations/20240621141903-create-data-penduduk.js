"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("data_penduduks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nomorIndukPenduduk: {
        type: Sequelize.BIGINT,
      },
      nama: {
        type: Sequelize.STRING,
      },
      tempatLahir: {
        type: Sequelize.STRING,
      },
      tglLahir: {
        type: Sequelize.DATE,
      },
      namaIbu: {
        type: Sequelize.STRING,
      },
      jenisKelamin_id: {
        type: Sequelize.INTEGER,
      },
      pendidikanTerakhir_id: {
        type: Sequelize.INTEGER,
      },
      agama_id: {
        type: Sequelize.INTEGER,
      },
      pekerjaan_id: {
        type: Sequelize.INTEGER,
      },
      status_id: {
        type: Sequelize.INTEGER,
      },
      shdk_id: {
        type: Sequelize.INTEGER,
      },
      dusun_id: {
        type: Sequelize.INTEGER,
      },
      rukunWarga_id: {
        type: Sequelize.INTEGER,
      },
      rukunTetangga_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("data_penduduks");
  },
};
