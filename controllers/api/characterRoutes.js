// =============================================
//  Ability Routes
// ---------------------------------------------
// Handles serving of spells, feats, and other
// power related data
// =============================================
const router = require('express').Router();
const { Character } = require('../../models');

// ------------------------------------------------------------------------------------------------
// Gets all characters
router.get('/', async (req, res) => {
  try {
    const charactersData = await Character.findAll();

    res.status(200).json(charactersData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Gets a character by its id
router.get('/:id', async (req, res) => {
  try {
    const charactersData = await Character.findone();

    res.status(200).json(charactersData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ------------------------------------------------------------------------------------------------

module.exports = router;
