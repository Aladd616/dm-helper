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
    const abilityData = await Ability.findOne({
      where: { id: req.params.id },
    });

    res.status(200).json(abilityData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// create a new ability
router.post('/', async (req, res) => {
  try {
    const abilityData = await Ability.create(req.body);
    res.status(200).json(abilityData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Updates a character by ID number
router.put('/:id', async (req, res) => {
  try {
    const ability = await Ability.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(ability);
  } catch (err) {
    res.status(500).json(err);
  }
  res.json(ability);
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// delete an ability by its `id`
router.delete('/:id', async (req, res) => {
  try {
    const abilityData = await Ability.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!abilityData) {
      res.status(404).json({ message: 'No ability found with this id!' });
      return;
    }

    res.status(200).json(abilityData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ------------------------------------------------------------------------------------------------

module.exports = router;
