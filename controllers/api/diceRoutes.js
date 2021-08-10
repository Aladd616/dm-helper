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

// purges spaces and check for invalid characters in the advanced roller input
function sanitizeFormula(str) {
  formula = str.split(' ').join('');
  if (/([^d0-9\+-])/.test(formula)) {
    throw 'Invalid syntax: Formula must be in the following format: 3d10+1d6+5';
  }

  // deconstructs the formula based on + or -
  deconForm = formula.split(/([-\+])/g);
  return deconForm;
}

function processDice(dice) {
  let temp, single, total; // Variables for various temporary data

  // loops through the deconstructed formula, handling each piece based on contents
  for (let i = 0; i < dice.formula.length; i++) {
    switch (true) {
      case /\+/.test(dice.formula[i]):
        dice.string += ' + ';
        break;
      case /-/.test(dice.formula[i]):
        dice.string += ' - ';
    }
  }
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
// using the route /api/dice
// TODO: Make this code less awful
router.post('/', async (req, res) => {
  try {
    let diceObject = {
      formula: sanitizeFormula(req.body.dice),
      sum: 0,
      string: '',
    };

    diceObject = processDice(diceObject);

    // Finalize output
    res.status(200).json(diceObject);
  } catch (err) {
    res.status(400).json(err);
  }
});

// ------------------------------------------------------------------------------------------------

module.exports = router;
