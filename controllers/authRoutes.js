// =============================================
//  Authentication Routes
// ---------------------------------------------
// Handles authentication-specific routing
// =============================================
const router = require('express').Router();
const passport = require('passport');

// ------------------------------------------------------------------------------------------------
// Logs in a user using passport's email/password auth scheme
router.post(
  '/login',
  passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
  }),
  (req, res, next) => {
    res.json({ message: 'Success!' });
  }
);
// ------------------------------------------------------------------------------------------------

module.exports = router;
