'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const data_penduduk = sequelize.define("data_penduduk");
  const RukunWarga = sequelize.define("RukunWarga");
  const Dusun = sequelize.define("Dusun");
  
  class RukunTetangga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RukunTetangga.belongsTo(data_penduduk,{
        as: "kepalaRt",
        foreignKey: "kepalaRt_id"
      })
      RukunTetangga.hasMany(data_penduduk,{
        as: "wargaRukunTetangga",
        foreignKey : "rukuntetangga_id"
      })
      RukunTetangga.belongsTo(RukunWarga,{
        as:"alamatRw",
        foreignKey:"rukunWarga_id"
      })
      RukunTetangga.belongsTo(Dusun, {
        as: "alamatDusun",
        foreignKey: "dusun_id",
      });
    }
  }
  RukunTetangga.init({
    nomorRt: DataTypes.STRING,
    kepalaRt_id: DataTypes.INTEGER,
    rukunWarga_id: DataTypes.INTEGER,
    dusun_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RukunTetangga',
  });
  return RukunTetangga;
};