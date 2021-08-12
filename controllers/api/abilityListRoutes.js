const router = require('express').Router();
const { Ability, AbilityList } = require('../../models');

// ------------------------------------------------------------------------------------------------
// Gets all abilities
router.get('/', async (req, res) => {
  try {
    const abilitylistData = await AbilityList.findAll();

    res.status(200).json(abilitylistData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Gets one ability by its id
router.get('/:id', async (req, res) => {
  try {
    const abilitylistData = await AbilityList.findOne({
      where: { id: req.params.id },
    });

    res.status(200).json(abilitylistData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ------------------------------------------------------------------------------------------------
router.post('/', async (req, res) => {
  // create a new ability

  try {
    const abilitylistData = await AbilityList.create(req.body);
    res.status(200).json(abilitylistData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// ------------------------------------------------------------------------------------------------
// router.put('/:id', async (req, res) => {
//   try {
//     const abilitylist = await AbilityList.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(abilitylist);
//   } catch (err) {
//     res.status(500).json(err);
//   }
//   res.json(abilitylist);
// });

router.delete('/:id', async (req, res) => {
  // delete an ability by its `id`
  try {
    const abilitylistData = await AbilityList.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!abilitylistData) {
      res.status(404).json({ message: 'No ability in the list with that id!' });
      return;
    }

    res.status(200).json(abilitylistData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
