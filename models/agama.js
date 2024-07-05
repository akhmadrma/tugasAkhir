'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const data_penduduk = sequelize.define("data_penduduk");
  class agama extends Model {
    
    static associate(models) {
      agama.hasMany(data_penduduk)
    }
  }
  agama.init({
    agama: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agama',
  });
  return agama;
};