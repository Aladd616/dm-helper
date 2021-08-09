// =============================================
//  Home Routes
// ---------------------------------------------
// Handles serving of static resources via
// handlebars templates
// =============================================
const router = require('express').Router();

// Gets homepage
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Homepage goes here.' });
});

// Gets the login page
// TODO: Rewrite this to render a web page and not
// just respond with JSON
router.get('/login', (req, res) => {
  res.status(200).json({ message: 'Login page goes here.' });
});

module.exports = router;
