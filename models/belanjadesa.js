'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BelanjaDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BelanjaDesa.init({
    kategoriBelanjaDesa_id: DataTypes.INTEGER,
    jenisBelanjaDesa_id: DataTypes.INTEGER,
    jumlahBelanja: DataTypes.BIGINT,
    tanggalTransaksi: DataTypes.DATE,
    buktiTransaksi_url: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BelanjaDesa',
  });
  return BelanjaDesa;
};