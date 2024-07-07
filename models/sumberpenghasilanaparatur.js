'use strict';
const {
  Model
} = require('sequelize');
const penghasilanaparatur = require('./penghasilanaparatur');
module.exports = (sequelize, DataTypes) => {
  const PenghasilanAparatur = sequelize.define("PenghasilanAparatur");
  class SumberPenghasilanAparatur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SumberPenghasilanAparatur.hasMany(PenghasilanAparatur,{
        as : 'detailPenghasilan',
        foreignKey : "sumberPenghasilanAparatu_id"
      })
    }
  }
  SumberPenghasilanAparatur.init({
    sumberPenghasilan: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SumberPenghasilanAparatur',
  });
  return SumberPenghasilanAparatur;
};