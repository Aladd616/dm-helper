// =============================================
//  User Routes
// ---------------------------------------------
// Handles user accounts
// =============================================
const router = require('express').Router();
const passport = require('passport');
const authCheck = require('connect-ensure-login').ensureLoggedIn;
const { User } = require('../../models');

// Creates a new user using /api/users/
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isDM: req.body.isDM,
    });

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.loggedIn = true;
      req.session.name = req.body.name;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
