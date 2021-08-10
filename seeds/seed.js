const sequelize = require('../config/connection');
const { Character } = require('../models');

const characterData = require('./characterData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Character.bulkCreate(characterData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
