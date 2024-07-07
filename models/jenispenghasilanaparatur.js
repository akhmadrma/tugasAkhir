'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PenghasilanAparatur = sequelize.define("PenghasilanAparatur");
  class JenisPenghasilanAparatur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JenisPenghasilanAparatur.hasMany(PenghasilanAparatur, {
        as: "detailPenghasilan",
        foreignKey: "jenisPenghasilanAparatur_id",
      });
    }
  }
  JenisPenghasilanAparatur.init({
    jenisPenghasilan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JenisPenghasilanAparatur',
  });
  return JenisPenghasilanAparatur;
};