// =============================================
//  Home Routes
// ---------------------------------------------
// Handles serving of static resources via
// handlebars templates
// =============================================
const router = require('express').Router();
const authCheck = require('connect-ensure-login').ensureLoggedIn;

// ------------------------------------------------------------------------------------------------
// Gets homepage
router.get('/', authCheck('/login'), async (req, res) => {
  res.render('home', { user: req.user });
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Gets the login page
router.get('/login', async (req, res) => {
  if (req.query.error) {
    res.render('login', { error: 'Unknown username or password combination.' });
  }
  if (req.session.loggedIn) {
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
