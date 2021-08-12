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
router.get('/', authCheck('/login'), (req, res) => {
  res.render('home');
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Gets the login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/', { user: req.user });
  }
  res.render('login');
});
// ------------------------------------------------------------------------------------------------

module.exports = router;
