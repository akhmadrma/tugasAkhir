'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PendapatanDesas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kategoriPendapatanDesa_id: {
        type: Sequelize.INTEGER
      },
      sumberPendapatanDesa_id: {
        type: Sequelize.INTEGER
      },
      jumlahPendapatan: {
        type: Sequelize.BIGINT
      },
      tanggalTransaksi: {
        type: Sequelize.DATE
      },
      buktiTransaksi_url: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PendapatanDesas');
  }
};