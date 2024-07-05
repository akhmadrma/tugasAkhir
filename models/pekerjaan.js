'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const data_penduduk = sequelize.define("data_penduduk");
  class Pekerjaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pekerjaan.hasMany(data_penduduk)
    }
  }
  Pekerjaan.init({
    pekerjaan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pekerjaan',
  });
  return Pekerjaan;
};