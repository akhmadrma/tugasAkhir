'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PembiayaanDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PembiayaanDesa.init({
    kategoriPembiayaanDesa_id: DataTypes.INTEGER,
    jenisPembiayaanDesa_id: DataTypes.INTEGER,
    jumlahPembiayaan: DataTypes.BIGINT,
    tanggalTransaksi: DataTypes.DATE,
    buktiTransaksi_url: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PembiayaanDesa',
  });
  return PembiayaanDesa;
};