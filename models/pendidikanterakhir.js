'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const data_penduduk = sequelize.define("data_penduduk");
  class PendidikanTerakhir extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PendidikanTerakhir.hasMany(data_penduduk)
    }
  }
  PendidikanTerakhir.init({
    pendidikanTerakhir: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PendidikanTerakhir',
  });
  return PendidikanTerakhir;
};