'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const data_penduduk = sequelize.define("data_penduduk");
  class SHDK extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SHDK.hasMany(data_penduduk)
    }
  }
  SHDK.init({
    shdk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SHDK',
  });
  return SHDK;
};