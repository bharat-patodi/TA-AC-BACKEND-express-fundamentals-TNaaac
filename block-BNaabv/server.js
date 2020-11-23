let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json()); // to capture json data form request
app.use(express.urlencoded()); // to capture form data from request

// GET /
app.get('/', (req, res) => {
    res.cookie('loggedIn', true);
    res.send('<h1>Welcome to Express</h1>');
});

// GET /about
app.get('/about', (req, res) => {
    res.send('My name is qwerty');
});

// GET /users/:username
app.get('/users/:username', (req, res) => {
    res.send(req.params.username)
});

// POST /form
app.post('/form', (req, res, next) => {
    res.send(req.body);
});

// POST /json
app.post('/json', (req, res, next) => {
    res.json(req.body);
});


// 404 response
app.use((req, res, next) => {
    res.send('404');
});

app.use((err, req, res, next) => {
    res.send(err);
})

// General 500 handler


app.listen(PORT);