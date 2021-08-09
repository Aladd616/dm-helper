// =============================================
//  Authentication Routes
// ---------------------------------------------
// Handles authentication-specific routing
// =============================================
const router = require('express').Router();
const passport = require('passport');
const authCheck = require('connect-ensure-login').ensureLoggedIn;

const User = require('../models/User');

// DEVELOPMENT TESTING
router.get('/', async (req, res, next) => {
  let userData = await User.findOne({ email: 'bear@bear.com' });
  res.status(200).json({ message: 'You are logged in!' + userData });
});

// Logs in a user using passport's email/password auth scheme
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/auth',
    failureRedirect: '/login',
  }),
  (req, res, next) => {
    res.json({ message: 'Success!' });
  }
);

module.exports = router;
