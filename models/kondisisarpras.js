'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const saranaPrasarana = sequelize.define("SaranaPrasarana")
  class KondisiSarpras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KondisiSarpras.hasMany(saranaPrasarana,{
        as : "saranaPrasarana",
        foreignKey : "kondisiSarpras_id"
      })
    }
  }
  KondisiSarpras.init({
    kondisi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KondisiSarpras',
  });
  return KondisiSarpras;
};