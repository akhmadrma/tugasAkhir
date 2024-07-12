'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const KategoriGeografiDesa = sequelize.define("KategoriGeografiDesa")
  class GeografiDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GeografiDesa.belongsTo(KategoriGeografiDesa,{
        as: 'Kategori',
        foreignKey : "kategoriGeografiDesa_id"
      })
    }
  }
  GeografiDesa.init({
    kategoriGeografiDesa_id: DataTypes.INTEGER,
    value: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GeografiDesa',
  });
  return GeografiDesa;
};