'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PeristiwaKeamanan = sequelize.define(
    "PeristiwaKeamanan"
  );
  class KategoriPeristiwaKeamanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriPeristiwaKeamanan.hasMany(PeristiwaKeamanan,{
        as : 'Peristiwa',
        foreignKey : "kategoriPeristiwaKeamanan_id"
      })
    }
  }
  KategoriPeristiwaKeamanan.init({
    kategoriPeristiwaKeamanan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriPeristiwaKeamanan',
  });
  return KategoriPeristiwaKeamanan;
};