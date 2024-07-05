'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const KepengurusanLembagaDesa = sequelize.define("KepengurusanLembagaDesa");
  class KategoriJabatanLembagaDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriJabatanLembagaDesa.hasMany(KepengurusanLembagaDesa, {
        as: "KategoriJabatan",
        foreignKey: "kategoriJabatanLembagaDesa_id",
      });
    }
  }
  KategoriJabatanLembagaDesa.init({
    kategoriJabatan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriJabatanLembagaDesa',
  });
  return KategoriJabatanLembagaDesa;
};