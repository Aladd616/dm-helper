const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class abilityList extends Model {}

abilityList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    ability_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "Ability",
        key: "id",
      },
    },
    character_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "character",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = abilityList;
