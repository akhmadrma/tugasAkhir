'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PenghasilanAparaturs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kategoriJabatanAparatur_id: {
        type: Sequelize.INTEGER
      },
      jenisPenghasilanAparatur_id: {
        type: Sequelize.INTEGER
      },
      sumberPenghasilanAparatur_id: {
        type: Sequelize.INTEGER
      },
      jumlahPenghasilan: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('PenghasilanAparaturs');
  }
};