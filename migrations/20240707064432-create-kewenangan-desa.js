'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KewenanganDesas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      namaKewenangan: {
        type: Sequelize.STRING
      },
      tanggalPenetapan: {
        type: Sequelize.DATE
      },
      kategoriKewenangan_id: {
        type: Sequelize.INTEGER
      },
      bidangKewenangan_id: {
        type: Sequelize.INTEGER
      },
      landasanHukum_url: {
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
    await queryInterface.dropTable('KewenanganDesas');
  }
};