let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cookieParser())

// GET /
app.get('/', (req, res) => {
    res.cookie('loggedIn', true);
    res.send('Welcome to Express');
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
app.use('/form', (req, res, next) => {
    app.use(express.urlencoded()); // to capture form data from request
    res.send(res.body);
});

// POST /json
app.use('/json', (req, res, next) => {
    app.use(express.json()) // to capture json data form request
    res.send(res.body);
});


// 404 response
app.use((req, res, next) => {
    res.next('404');
});

app.use((err, req, res, next) => {
    res.send(err);
})

// General 500 handler


app.listen(PORT);