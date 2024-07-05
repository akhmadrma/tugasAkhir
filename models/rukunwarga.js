'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const dataPenduduk = sequelize.define("data_penduduk");
  class RukunWarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RukunWarga.belongsTo(dataPenduduk,{
        as:"kepalaRw",
        foreignKey : "kepalaRw_id"
      })
      RukunWarga.hasMany(dataPenduduk,{
        as:"wargaRukunWarga",
        foreignKey : "rukunWarga_id"
      })
    }
  }
  RukunWarga.init({
    nomorRw: DataTypes.STRING,
    kepalaRw_id: DataTypes.INTEGER,
    dusun_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RukunWarga',
  });
  return RukunWarga;
};