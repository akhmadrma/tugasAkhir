'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BelanjaDesas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kategoriBelanjaDesa_id: {
        type: Sequelize.INTEGER
      },
      jenisBelanjaDesa_id: {
        type: Sequelize.INTEGER
      },
      jumlahBelanja: {
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
    await queryInterface.dropTable('BelanjaDesas');
  }
};