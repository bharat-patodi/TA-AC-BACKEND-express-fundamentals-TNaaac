let express = require('express');

let app = express();
// - create a custom app level middleware which consoles request `url` and `method` and passes executio to next middleware in line.
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

// A simple router to handle get request on index page
app.get('/', (req, res) => {
    res.send('Port opened at 4000');
});

// - add listener on port 4000
app.listen(4000);