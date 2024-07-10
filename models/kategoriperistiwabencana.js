'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PeristiwaBencana = sequelize.define(
    "PeristiwaBencana"
  );
  class KategoriPeristiwaBencana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KategoriPeristiwaBencana.hasMany(PeristiwaBencana,{
        as : 'Peristiwa',
        foreignKey : "kategoriPeristiwaBencana_id"
      })
    }
  }
  KategoriPeristiwaBencana.init({
    kategoriPeristiwaBencana: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KategoriPeristiwaBencana',
  });
  return KategoriPeristiwaBencana;
};