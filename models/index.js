const User = require('./User');
const Character = require('./Character');
const Ability = require('./Ability');
const AbilityList = require('./AbilityList');

Ability.belongsToMany(Character, {
  through: 'AbilityList',
  foreignKey: 'ability_id',
});

Character.belongsToMany(Ability, {
  through: 'AbilityList',
  foreignKey: 'character_id',
});

Character.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Character, {
  foreignKey: 'user_id',
});

module.exports = {
  User,
  Character,
  Ability,
  AbilityList,
};
