'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const KewenanganDesa = sequelize.define("KewenanganDesa");
  class BidangKewenangan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BidangKewenangan.hasMany(KewenanganDesa,{
        as:"Kewenangan",
        foreignKey: "bidangKewenangan_id"
      })
    }
  }
  BidangKewenangan.init({
    bidangKewenangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BidangKewenangan',
  });
  return BidangKewenangan;
};