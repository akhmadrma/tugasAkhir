'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const JenisBelanjaDesa = sequelize.define("JenisBelanjaDesa");
  const KategoriBelanjaDesa = sequelize.define("KategoriBelanjaDesa");
  class BelanjaDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BelanjaDesa.belongsTo(JenisBelanjaDesa,{
        as: "JenisBelanja",
        foreignKey : "jenisBelanjaDesa_id"
      })
      BelanjaDesa.belongsTo(KategoriBelanjaDesa,{
        as: "KategoriBelanja",
        foreignKey : "kategoriBelanjaDesa_id"
      })
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