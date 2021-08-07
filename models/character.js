const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    character_name: {
      type: DataTypes.STRING,
    },
    race: {
      type: DataTypes.STRING,
    },
    class: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.STRING,
    },
    alignment: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    hitDie: {
      type: DataTypes.STRING,
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    initiative: {
      type: DataTypes.INTEGER,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    space: {
      type: DataTypes.INTEGER,
    },
    reach: {
      type: DataTypes.INTEGER,
    },
    armorClass: {
      type: DataTypes.INTEGER,
    },
    attacks: {
      type: DataTypes.TEXT,
    },
    fullattack: {
      type: DataTypes.TEXT,
    },
    specialattack: {
      type: DataTypes.TEXT,
    },
    specialqual: {
      type: DataTypes.TEXT,
    },
    fort: {
      type: DataTypes.INTEGER,
    },
    reflex: {
      type: DataTypes.INTEGER,
    },
    will: {
      type: DataTypes.INTEGER,
    },
    dex: {
      type: DataTypes.INTEGER,
    },
    con: {
      type: DataTypes.INTEGER,
    },
    int: {
      type: DataTypes.INTEGER,
    },
    wis: {
      type: DataTypes.INTEGER,
    },
    cha: {
      type: DataTypes.INTEGER,
    },
    skills: {
      type: DataTypes.TEXT,
    },
    feats: {
      type: DataTypes.TEXT,
    },
    equipment: {
      type: DataTypes.TEXT,
    },
    notes: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscore: true,
    modelName: "character",
  }
);

module.exports = Character;
