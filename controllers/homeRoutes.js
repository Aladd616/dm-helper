// =============================================
//  Home Routes
// ---------------------------------------------
// Handles serving of static resources via
// handlebars templates
// =============================================
const router = require('express').Router();
const { Ability, Character } = require('../models');
const authBlock = require('../utils/auth');

// ------------------------------------------------------------------------------------------------
// Gets homepage
router.get('/', authBlock, async (req, res) => {
  try {
    const charList = await Character.findAll();
    const abilityList = await Ability.findAll();

    console.log(abilityList);
    const charData = charList.map((char) => char.get({ plain: true }));
    const abilityData = abilityList.map((ability) =>
      ability.get({ plain: true })
    );
    res.render('home', {
      user: req.user,
      characters: charData,
      abilities: abilityData,
    });
  } catch (err) {}
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Gets the login page
router.get('/login', async (req, res) => {
  if (req.query.error) {
    if (req.query.error == 'noLogin') {
      res.render('login', { error: 'You must log in first!' });
    } else {
      res.render('login', {
        error: 'Unknown username or password combination.',
      });
    }
  } else if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('login');
  }
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Gets the login page
router.get('/signup', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
  } else {
    res.render('signup');
  }
});
// ------------------------------------------------------------------------------------------------

module.exports = router;
