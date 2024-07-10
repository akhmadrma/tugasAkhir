"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const KategoriPeristiwaBencana = sequelize.define("KategoriPeristiwaBencana");
  class PeristiwaBencana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PeristiwaBencana.belongsTo(KategoriPeristiwaBencana,{
        as : 'KategoriPeristiwa',
        foreignKey : "kategoriPeristiwaBencana_id"
      })
    }
  }
  PeristiwaBencana.init(
    {
      namaPeristiwa: DataTypes.STRING,
      tanggalPeristiwa: DataTypes.DATE,
      kategoriPeristiwaBencana_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PeristiwaBencana",
    }
  );
  return PeristiwaBencana;
};
