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
app.use(logger('tiny'));
app.use('/about', (req, res, next) => {
    res.cookie('username', 'surendra');
    res.send('This is where we handle the about cookie kit');
    next();
});

app.use((req, res, next) => {
    console.log(req.cookies);
    next();
})

// Routes

app.get('/', (req, res) => {
    res.send('Port opened at 3040');
});