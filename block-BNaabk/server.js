// Require express
const express = require('express');
let app = express();

app.get('/', function(req, res) {
    console.log("This just opened up");
    res.write("Server opened at 3K");
    res.end();
});

app.listen(3000);