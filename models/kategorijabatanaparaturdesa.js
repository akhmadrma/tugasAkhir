'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const AparaturDesa = sequelize.define("AparaturDesa");
  const PenghasilanAparatur = sequelize.define("PenghasilanAparatur");
  class KategoriJabatanAparaturDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriJabatanAparaturDesa.hasOne(AparaturDesa,{
        as : 'dataAparatur',
        foreignKey : "kategoriJabatanAparatur_id"
      })
      KategoriJabatanAparaturDesa.hasMany(PenghasilanAparatur,{
        as : 'Penghasilan',
        foreignKey : "kategoriJabatanAparatur_id"
      })
    }
  }
  KategoriJabatanAparaturDesa.init({
    kategoriJabatan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriJabatanAparaturDesa',
  });
  return KategoriJabatanAparaturDesa;
};