'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const dataPenduduk = sequelize.define("data_penduduk")
  class Dusun extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dusun.hasMany(dataPenduduk,{
        as : 'wargaDusun',
        foreignKey : 'dusun_id'
      })
      Dusun.belongsTo(dataPenduduk,{
        as : 'kepalaDusun',
        foreignKey : "kepalaDusun_id"
      })
    }
  }
  Dusun.init({
    namaDusun: DataTypes.STRING,
    kepalaDusun_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dusun',
  });
  return Dusun;
};