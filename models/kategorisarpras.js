'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const saranaPrasarana = sequelize.define("SaranaPrasarana")
  class KategoriSarpras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriSarpras.hasMany(saranaPrasarana,{
        as : "saranaPrasarana",
        foreignKey : "kategoriSarpras"
      })
    }
  }
  KategoriSarpras.init({
    kategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriSarpras',
  });
  return KategoriSarpras;
  }; 