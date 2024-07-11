'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PembiayaanDesa = sequelize.define("PembiayaanDesa");
  class KategoriPembiayaanDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriPembiayaanDesa.hasMany(PembiayaanDesa,{
        as: "DataPembiayaan",
        foreignKey : "kategoriPembiayaanDesa_id"
      })
    }
  }
  KategoriPembiayaanDesa.init({
    kategoriPembiayaanDesa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriPembiayaanDesa',
  });
  return KategoriPembiayaanDesa;
};