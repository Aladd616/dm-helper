// =============================================
//  Authentication Routes
// ---------------------------------------------
// Handles authentication-specific routing
// =============================================
const router = require('express').Router();
const passport = require('passport');
const authCheck = require('connect-ensure-login').ensureLoggedIn;

// DEVELOPMENT TESTING
router.get('/', authCheck(), (req, res, next) => {
  res.status(200).json({ message: 'You are logged in!' });
});

// Logs in a user using passport's email/password auth scheme
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/auth/',
    failureRedirect: '/login',
    failureMessage: true,
  }),
  (req, res, next) => {}
);

module.exports = router;
