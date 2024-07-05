'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const data_penduduk = sequelize.define('data_penduduk');
  class JenisKelamin extends Model {
    
    static associate(models) {
      JenisKelamin.hasMany(data_penduduk)
    }
  }
  JenisKelamin.init({
    jenisKelamin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JenisKelamin',
  });
  return JenisKelamin;
};