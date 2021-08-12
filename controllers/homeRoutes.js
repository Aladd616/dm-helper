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
  await console.log(req.user);
});
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// Gets the login page
router.get('/login', async (req, res) => {
  console.log('User attempting login');
  if (req.query.error) {
    console.log('Error present');
    res.render('login', { error: 'Unknown username or password combination.' });
  }
  if (req.user) {
    console.log(req.user);
    res.redirect('/');
  } else {
    console.log('normal log in page');
    res.render('login');
  }
});
// ------------------------------------------------------------------------------------------------

module.exports = router;
