let express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5555;

// Q. Create a middleware which is similar to morgan(logger) which logs
// - requested method
// - requested url
// - current time
app.use((req, res, next) => {
    console.log(req.method, req.url, Date.now());
    return next();
});

// Q. Create a middleware which is similar to express.json()
// - parses json data and puts it into `req.body`
app.use((req, res, next) => {
    let reply = "";
    req.on("data", (chunk) => {
        reply += chunk;
        console.log(req.body);
    }).on("end", () => {
        req.body = reply;
    });
    return next();
});

// Create a middleware which functions similar to express.static()
app.use((req, res, next) => {
    fs.readFile(__dirname + "/public" + req.url, (err, content) => {
        if(err) return next(err);
        res.sendFile(__dirname + "/public" + req.url);
    });
    return next();
});

// Some routes
app.get('/', (req, res) => {
    res.send('Welcome to Middleware Heaven');
});

// Handle all errors
app.use((err, req, res, next) => {
    console.log(err);
    res.send('An error has occured');
});

app.listen(PORT);