"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const KategoriKewenangan = sequelize.define("KategoriKewenangan");
  const BidangKewenangan = sequelize.define("BidangKewenangan");

  class KewenanganDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KewenanganDesa.belongsTo(KategoriKewenangan, {
        as: "KategoriKewenangan",
        foreignKey: "kategoriKewenangan_id",
      });
      KewenanganDesa.belongsTo(BidangKewenangan,{
        as : 'BidangKewenangan',
        foreignKey : "bidangKewenangan_id"
      })
    }
  }
  KewenanganDesa.init(
    {
      namaKewenangan: DataTypes.STRING,
      tanggalPenetapan: DataTypes.DATE,
      kategoriKewenangan_id: DataTypes.INTEGER,
      bidangKewenangan_id: DataTypes.INTEGER,
      landasanHukum_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "KewenanganDesa",
    }
  );
  return KewenanganDesa;
};
