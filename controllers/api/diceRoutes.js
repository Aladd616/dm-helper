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

// Adds a result to the sum and prints it to the string
function addToSum(dice, i, result) {
  if (dice.formula[i - 1] === '+') {
    dice.sum = parseInt(dice.sum) + parseInt(result);
  } else if (dice.formula[i - 1] === '-') {
    dice.sum = dice.sum - result;
  } else {
    dice.sum = result;
  }
}

// Processes a deconstructed dice formula
function processDice(dice) {
  let temp, single, total;
  // loops through the deconstructed formula, handling each piece based on contents
  for (let i = 0; i < dice.formula.length; i++) {
    switch (true) {
      // Translates + signs to the string ---------------------------------------------------------
      case /\+/.test(dice.formula[i]):
        dice.string += ' + ';
        break;

      // translates - signs to the string ---------------------------------------------------------
      case /-/.test(dice.formula[i]):
        dice.string += ' - ';
        break;

      // handles simple numbers -------------------------------------------------------------------
      case /^[0-9]+$/.test(dice.formula[i]):
        addToSum(dice, i, dice.formula[i]);
        dice.string += dice.formula[i];
        break;

      // XdY, rolls a die of Y sides X number of times, printing out individual rolls.
      // such as 3d6 (1 + 4 + 3);------------------------------------------------------------------
      case /d/.test(dice.formula[i]):
        temp = dice.formula[i].split('d');
        single = 0;
        total = 0;
        dNum = temp[0];
        dSize = temp[1];

        dice.string += `${dice.formula[i]} (`;

        for (let k = 0; k < dNum; k++) {
          single = roll(dSize);
          total = parseInt(total) + parseInt(single);
          console.log(`Total is ${total}`);
          if (k == 0) {
            // May add span class such as <span class='dice-details'> for styling
            dice.string += ` ${single}`;
          } else {
            dice.string += ` + ${single}`;
          }
        }

        dice.string += ` )`;

        addToSum(dice, i, total);
        break;
    }
  }
  dice.string += ` = ${dice.sum}`;
  return dice;
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
