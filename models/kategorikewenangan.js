'use strict';
const {
  Model
} = require('sequelize');
const bidangkewenangan = require('./bidangkewenangan');
module.exports = (sequelize, DataTypes) => {
  const KewenanganDesa = sequelize.define("KewenanganDesa")
  class KategoriKewenangan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriKewenangan.hasMany(KewenanganDesa,{
        as: "Kewenangan",
        foreignKey : "kategoriKewenangan_id"
      })
    }
  }
  KategoriKewenangan.init({
    kategoriKewenangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriKewenangan',
  });
  return KategoriKewenangan;
};