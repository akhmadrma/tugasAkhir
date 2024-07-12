'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const GeografiDesa = sequelize.define("GeografiDesa");
  class KategoriGeografiDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriGeografiDesa.hasOne(GeografiDesa, {
        as: "value",
        foreignKey: "kategoriGeografiDesa_id",
      });
    }
  }
  KategoriGeografiDesa.init({
    kategoriGeografiDesa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriGeografiDesa',
  });
  return KategoriGeografiDesa;
};