// =============================================
//  Character Routes
// ---------------------------------------------
// Handles creation, deletion, and updates of

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
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// create a new character
router.post('/', async (req, res) => {
  try {
    const characterData = await Character.create(req.body);
    res.status(200).json(characterData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
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
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// delete on tag by its `id`
router.delete('/:id', async (req, res) => {
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
// ------------------------------------------------------------------------------------------------

module.exports = router;
