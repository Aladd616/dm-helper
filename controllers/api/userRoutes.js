// =============================================
//  User Routes
// ---------------------------------------------
// Handles user accounts
// =============================================
const router = require('express').Router();
const passport = require('passport');
const authCheck = require('connect-ensure-login').ensureLoggedIn;
const { User } = require('../../models');

// ------------------------------------------------------------------------------------------------
// Gets all data about all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------------------------------------------------------------------------------------------
// Gets data about one user by id
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findone();

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------------------------------------------------------------------------------------------

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
      req.session.name = newUser.name;

      res.status(200).json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ------------------------------------------------------------------------------------------------
// Logs in a previously created user using /api/users/login
router.post(
  '/login',
  passport.authenticate('local'),
  async (req, res, next) => {
    res.json({ message: 'Log-in Successful!' });
  }
);

// ------------------------------------------------------------------------------------------------
// Log out a currently signed in user using /api/users/logout
router.post('/logout', async (req, res, next) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
// ------------------------------------------------------------------------------------------------

module.exports = router;
