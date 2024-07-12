'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const KategoriSumberDayaAlamDesa = sequelize.define("KategoriSumberDayaAlamDesa")
  class SumberDayaAlamDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SumberDayaAlamDesa.belongsTo(KategoriSumberDayaAlamDesa,{
        as : 'Kategori',
        foreignKey : "kategoriSumberDayaAlamDesa_id"
      })
    }
  }
  SumberDayaAlamDesa.init({
    nama: DataTypes.STRING,
    kategoriSumberDayaAlamDesa_id: DataTypes.INTEGER,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SumberDayaAlamDesa',
  });
  return SumberDayaAlamDesa;
};