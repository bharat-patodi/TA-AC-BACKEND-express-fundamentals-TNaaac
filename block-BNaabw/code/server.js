const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const PORT = 4000;

// Middleware
app.use(express.json()); // Middleware for parsing JSON
app.use(express.urlencoded( {extended: true} )); // Middleware for parsing form data
app.use(express.static('public')); // for rendering static files
app.use(logger('dev'));
app.use(cookieParser());

app.post('/json', (req, res) => {
    console.log(req.body);
    res.send();
});

// Routes
app.get('/', (req, res) => {
    res.cookie("refreshCount", (req.cookies.refreshCount)?++req.cookies.refreshCount:0);
    console.log(req.method, req.url);
    res.sendFile(__dirname+ '/index.html');
    console.log('Number of refreshes: ', req.cookies.refreshCount);
});

app.get('/users', (req, res) => {
    res.send(req.cookies.refreshCount);
})

app.post('/submit-form', (req, res) => {
    res.json(req.body);
})

// Error Handler for random routes
app.use((req, res) => {
    console.log(req.method, req.url);
    next('404');
})

app.use((err, req, res, next) => {
    res.send("Mistake");
});

app.listen(PORT);