'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const LembagaDesa = sequelize.define("LembagaDesa");
  class KegiatanLembagaDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KegiatanLembagaDesa.belongsTo(LembagaDesa,{
        as : "LembagaDesa",
        foreignKey : "lembagaDesa_id"
      })
    }
  }
  KegiatanLembagaDesa.init({
    namaKegiatan: DataTypes.STRING,
    tanggalKegiatan: DataTypes.DATE,
    lembagaDesa_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'KegiatanLembagaDesa',
  });
  return KegiatanLembagaDesa; 
};