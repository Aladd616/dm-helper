// =============================================
//  Home Routes
// ---------------------------------------------
// Handles serving of static resources via
// handlebars templates
// =============================================
const router = require('express').Router();
const authBlock = require('../utils/auth');

// ------------------------------------------------------------------------------------------------
// Gets homepage
router.get('/', authBlock, async (req, res) => {
  res.render('home', { user: req.user });
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
