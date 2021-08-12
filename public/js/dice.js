// ====================================================
// Dice
// ----------------------------------------------------
// Handles dice rolling functionality
// ====================================================
const dice = (function () {
  const rollHistory = $('#rollHistory');
  const diceBar = $('#dice-bar');

  // Prints a string to a list item in the roll history box
  function printHistory(str) {
    rollHistory.append($(`<li class="history-item">${str}</li>`));
    limitList();
  }

  // Prunes old entries to the roll history
  function limitList() {
    let list = rollHistory.children();
    if (list.length > 10) {
      rollHistory.children().first().remove();
    }
  }
  // Handles a click of a dice image
  async function quickDice(event) {
    event.preventDefault();
    let size = $(event.target).parents('.quick-dice-box').attr('data-dietype');
    let apiURL = `/api/dice/${size}`;

    const response = await fetch(apiURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    let result = await response.json();

    $(this).siblings().html(result);

    printHistory(
      `<span class="quick-dice-result">Quick Dice:</span> 1d${size} = ${result}`
    );
  }

  // Grabs a formula from the dice bar
  function getFormula() {
    let formula = diceBar.val();
    console.log(formula);
    diceBar.val('').change();

    return formula;
  }

  // Handles an advanced dice roll, submitting the formula to the api
  async function advDice(event) {
    event.preventDefault();
    formula = getFormula();

    if (!formula) {
      return null;
    }

    const response = await fetch('/api/dice', {
      method: 'POST',
      body: JSON.stringify({
        dice: formula,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    result = await response.json();

    console.log(result);
    if (response.ok) {
      printHistory(`${result.string}`);
    } else {
      printHistory(`Something went wrong with the server. Error: ${result}`);
    }
  }

  // Sets up event handlers
  function init() {
    $('.quick-dice-button').on('click', quickDice);
    $('#roll-button').on('click', advDice);
  }

  return {
    init: init,
  };
})();

// Load dice module when document is ready
$(document).ready(function () {
  dice.init();
});
