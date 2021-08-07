const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Ability extends Model {}

Ability.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM(
        "spell",
        "feat",
        "special abilities",
        "spell-like abilities"
      ),
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.TINYTEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Ability",
  }
);

module.exports = Ability;
