'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PembiayaanDesa = sequelize.define("PembiayaanDesa");
  class JenisPembiayaanDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JenisPembiayaanDesa.hasMany(PembiayaanDesa,{
        as : 'DataPembiayaan',
        foreignKey : "jenisPembiayaanDesa_id"
      })
    }
  }
  JenisPembiayaanDesa.init({
    jenisPembiayaanDesa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JenisPembiayaanDesa',
  });
  return JenisPembiayaanDesa;
};