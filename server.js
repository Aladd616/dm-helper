// Initialize main modules
const path = require('path');
const express = require('express');
const session = require('express-session');
const handlebars = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initialize secondary utilities
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const { urlencoded } = require('express');
const passport = require('passport');

// Set up server
const app = express();
const PORT = process.env.PORT || 3001;
const appStore = new SequelizeStore({ db: sequelize });

const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: appStore,
};

app.use(session(sess));

// Run boot scripts
require('./boot/auth')();

// Set up addons
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'main',
    helpers: helpers,
  })
);
app.set('view engine', 'hbs');
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Initiate the sequelize server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server initialization complete. Server listening on ${PORT}`);
  });
});
