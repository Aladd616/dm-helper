const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));

const port = 3000;
app.listen(port);
console.log(`Listening to server: http://localhost:${port}`);

app.get('/', (req, res) => {
    res.render("main");
});
app.get('/build', (req, res) => {
    res.render("build")
});
app.get('/chat', (req, res) => {
    res.render("chat")
});
app.get('/main', (req, res) => {
    res.render("main");
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/signup', (req, res) => {
    res.render('signup')
});