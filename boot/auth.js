// =============================================
//  Authentiction Boot Script
// ---------------------------------------------
// Sets up passport, its strategies, and its
// callback functions
// =============================================
const passport = require('passport');
const bcrypt = require('bcrypt');

const User = require('../models/User');

module.exports = function () {
  passport.serializeUser(function (user, done) {
    process.nextTick(function () {
      done(null, user.id);
    });
  });

  passport.deserializeUser(function (id, done) {
    User.findById(
      (id,
      function (err, user) {
        done(err, user);
      })
    );
  });
};
