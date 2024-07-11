'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PendapatanDesa = sequelize.define("PendapatanDesa")
  class SumberPendapatanDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SumberPendapatanDesa.hasMany(PendapatanDesa,{
        as : 'DataPendapatan',
        foreignKey : "sumberPendapatanDesa_id"
      })
    }
  }
  SumberPendapatanDesa.init({
    sumberPendapatanDesa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SumberPendapatanDesa',
  });
  return SumberPendapatanDesa;
};