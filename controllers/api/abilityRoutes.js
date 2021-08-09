// =============================================
//  Ability Routes
// ---------------------------------------------
// Handles serving of spells, feats, and other
// power related data
// =============================================
const router = require('express').Router();
const { Ability } = require('../../models');

// ------------------------------------------------------------------------------------------------
// Gets all abilities
router.get('/', async (req, res) => {
  try {
    const abilityData = await Ability.findAll();

    res.status(200).json(abilityData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Gets one ability by its id
router.get('/:id', async (req, res) => {
  try {
    const abilityData = await Ability.findone();

    res.status(200).json(abilityData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ------------------------------------------------------------------------------------------------

module.exports = router;
