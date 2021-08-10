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
    const charactersData = await Character.findOne({
      where: { id: req.params.id },
    });

    res.status(200).json(charactersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new character

  try {
    const characterData = await Character.create(req.body);
    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// ------------------------------------------------------------------------------------------------
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const character = await Character.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(character);
  } catch (err) {
    res.status(500).json(err);
  }
  res.json(character);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id`
  try {
    const characterData = await Character.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!characterData) {
      res.status(404).json({ message: 'No character found with this id!' });
      return;
    }

    res.status(200).json(characterData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
