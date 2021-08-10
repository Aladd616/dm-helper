// =============================================
//  Dice Routes
// ---------------------------------------------
// Handles dice processing
// =============================================
const router = require('express').Router();

// ------------------------------------------------------------------------------------------------
// Helper Functions
// ------------------------------------------------------------------------------------------------
// Handles a single roll of the dice
function roll(size) {
  return Math.floor(Math.random() * size) + 1;
}

function sanitizeFormula(str) {
  // purge spaces and check for invalid characters
  formula = str.split(' ').join('');
  console.log(formula);
  if (/([^d0-9\+-])/.test(formula)) {
    throw 'Invalid syntax: Formula must be in the following format: 3d10+1d6+5';
  }

  return formula;
}

// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Routes
// ------------------------------------------------------------------------------------------------
// returns a simple die roll using /api/dice/:die where :die is the number of sides the dice has
router.get('/:die', async (req, res) => {
  res.status(200).json(roll(req.params.die));
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Processes an arbitrary formula in a format such as 3d10+1d6+5
// TODO: Make this code less awful
router.post('/', async (req, res) => {
  try {
    res.status(200).json(sanitizeFormula(req.body.input));
  } catch (err) {
    res.status(400).json(err);
  }
});

// ------------------------------------------------------------------------------------------------

module.exports = router;
