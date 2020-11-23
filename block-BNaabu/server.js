const express = require('express');
const app = express();
const PORT = 4444;

// create a middleware and call next with an error argument when request is made on `/admin` route to check whether it is handle by error handler middleware or not ?

app.use((req, res, next) => {
    if(req.url === '/admin') {
        return next('Unauthorized Entry');
    } else {
        next();
    }
});

// GET request on '/'
app.get('/', (req, res) => {
    res.send('Port Opened on 4444');
});

// GET on /about
app.get('/about', (req, res) => {
    res.send('This is the about page');
});

// Error Handler middleware
app.use((req, res, next) => {
    res.send('Page not found');
    next("error found");
});

app.use((err, req, res, next) => {
    console.log("page not found");
});

app.listen(PORT, () => {
    console.log("Try localhost:4444");
});