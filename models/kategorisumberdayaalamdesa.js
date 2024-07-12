'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const SumberDayaAlamDesa = sequelize.define("SumberDayaAlamDesa")
  class KategoriSumberDayaAlamDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriSumberDayaAlamDesa.hasMany(SumberDayaAlamDesa, {
        as: "DataSDA",
        foreignKey: "kategoriSumberDayaAlamDesa_id",
      });
    }
  }
  KategoriSumberDayaAlamDesa.init({
    kategoriSumberDayaAlamDesa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriSumberDayaAlamDesa',
  });
  return KategoriSumberDayaAlamDesa;
};