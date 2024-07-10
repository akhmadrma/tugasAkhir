'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SumberPendapatanDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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