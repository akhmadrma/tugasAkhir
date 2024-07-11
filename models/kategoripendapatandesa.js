'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PendapatanDesa = sequelize.define("PendapatanDesa");
  class KategoriPendapatanDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriPendapatanDesa.hasMany(PendapatanDesa,{
        as : 'DataPendapatan',
        foreignKey : "kategoriPendapatanDesa_id"
      })
    }
  }
  KategoriPendapatanDesa.init({
    kategoriPendapatanDesa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriPendapatanDesa',
  });
  return KategoriPendapatanDesa;
};