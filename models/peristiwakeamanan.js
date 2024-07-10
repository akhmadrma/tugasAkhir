'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const KategoriPeristiwaKeamanan = sequelize.define("KategoriPeristiwaKeamanan")
  class PeristiwaKeamanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PeristiwaKeamanan.belongsTo(KategoriPeristiwaKeamanan,{
        as : 'KategoriPeristiwa',
        foreignKey : "kategoriPeristiwaKeamanan_id"
      })
    }
  }
  PeristiwaKeamanan.init({
    namaPeristiwa: DataTypes.STRING,
    tanggalPeristiwa: DataTypes.DATE,
    kategoriPeristiwaKeamanan_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PeristiwaKeamanan',
  });
  return PeristiwaKeamanan;
};