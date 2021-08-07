// =============================================
//  Authentiction Boot Script
// ---------------------------------------------
// Sets up passport, its strategies, and its
// callback functions
// =============================================
const passport = require('passport');
const stratLocal = require('passport-local');

const User = require('../models/User');

module.exports = function () {
  passport.use(
    new stratLocal({ usernameField: 'email' }, (email, password, done) => {
      user.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'No user found.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Password incorrect.' });
        }
        return done(null, user);
      });
    })
  );
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
