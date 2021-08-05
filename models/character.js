const {Model, DataTypes} = require('sequelize');
const sequelize = require('');

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
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
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
    
        
    }
   
)