'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const data_penduduk = sequelize.define("data_penduduk");
  const KategoriJabatanAparaturDesa = sequelize.define("KategoriJabatanAparaturDesa");
  class AparaturDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AparaturDesa.belongsTo(data_penduduk,{
        as : "dataAparatur",
        foreignKey : "dataPenduduk_id"
      })
      AparaturDesa.belongsTo(KategoriJabatanAparaturDesa,{
        as : 'KategoriJabatan',
        foreignKey : "kategoriJabatanAparatur_id"
      })
    }
  }
  AparaturDesa.init({
    dataPenduduk_id: DataTypes.INTEGER,
    kategoriJabatanAparatur_id: DataTypes.INTEGER,
    tanggalMulaiMenjabat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AparaturDesa',
  });
  return AparaturDesa;
};