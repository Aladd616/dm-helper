const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
      allowNull: false,
    },
    gender: {
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
      type: DataTypes.STRING,
    },
    initiative: {
      type: DataTypes.STRING,
    },
    speed: {
      type: DataTypes.STRING,
    },
    space: {
      type: DataTypes.STRING,
    },
    reach: {
      type: DataTypes.STRING,
    },
    armorClass: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
    },
    reflex: {
      type: DataTypes.STRING,
    },
    will: {
      type: DataTypes.STRING,
    },
    str: {
      type: DataTypes.STRING,
    },
    dex: {
      type: DataTypes.STRING,
    },
    con: {
      type: DataTypes.STRING,
    },
    int: {
      type: DataTypes.STRING,
    },
    wis: {
      type: DataTypes.STRING,
    },
    cha: {
      type: DataTypes.STRING,
    },
    skills: {
      type: DataTypes.TEXT,
    },
    feats: {
      type: DataTypes.TEXT,
    },
    spelllist: {
      type: DataTypes.TEXT,
    },
    equipment: {
      type: DataTypes.TEXT,
    },
    notes: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscore: true,
    modelName: 'character',
  }
);

module.exports = Character;
