'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const BelanjaDesa = sequelize.define("BelanjaDesa");
  class KategoriBelanjaDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriBelanjaDesa.hasMany(BelanjaDesa,{
        as : "DataBelanja",
        foreignKey : "kategoriBelanjaDesa_id"
      })
    }
  }
  KategoriBelanjaDesa.init({
    kategoriBelanjaDesa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriBelanjaDesa',
  });
  return KategoriBelanjaDesa;
};