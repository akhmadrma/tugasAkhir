'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const BelanjaDesa = sequelize.define("BelanjaDesa");
  class JenisBelanjaDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JenisBelanjaDesa.hasMany(BelanjaDesa,{
        as : "DataBelanja",
        foreignKey : "jenisBelanjaDesa_id"
      })
    }
  }
  JenisBelanjaDesa.init({
    jenisBelanjaDesa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JenisBelanjaDesa',
  });
  return JenisBelanjaDesa;
};