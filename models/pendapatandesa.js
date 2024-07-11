'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const SumberPendapatanDesa = sequelize.define("SumberPendapatanDesa");
  const KategoriPendapatanDesa = sequelize.define("KategoriPendapatanDesa");
  class PendapatanDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PendapatanDesa.belongsTo(SumberPendapatanDesa,{
        as : 'SumberPendapatan',
        foreignKey : "sumberPendapatanDesa_id"
      })
      PendapatanDesa.belongsTo(KategoriPendapatanDesa,{
        as: 'KategoriPendapatan',
        foreignKey : 'kategoriPendapatanDesa_id'
      })
    }
  }
  PendapatanDesa.init({
    kategoriPendapatanDesa_id: DataTypes.INTEGER,
    sumberPendapatanDesa_id: DataTypes.INTEGER,
    jumlahPendapatan: DataTypes.BIGINT,
    tanggalTransaksi: DataTypes.DATE,
    buktiTransaksi_url: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PendapatanDesa',
  });
  return PendapatanDesa;
};