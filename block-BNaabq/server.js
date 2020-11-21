// Import packages
let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Listen at Port
let app = express();
const PORT = 3040;
app.listen(PORT);

// Middleware

app.use(logger('dev'));
app.use(cookieParser());

// WIP --------

// Routes
app.get('/about', (req, res) => {
    res.cookie("username", "surendra");
})

app.get('/', (req, res) => {
    res.send('Port opened at 3040');
});