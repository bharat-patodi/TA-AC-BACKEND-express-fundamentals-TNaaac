// Require express
const express = require('express');
let app = express();

app.use(function(req, res) {
    if(req.method === "GET" && req.url === "/") {
        console.log("This just opened up");
        res.write("Server opened at 3K");
        res.end();
    }
});

app.listen(3000);