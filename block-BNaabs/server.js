// Import packages
let express = require('express');
let app = express();

// Open the port
const PORT = 4050;
app.listen(PORT, () => {
    console.log("4050 ready to Port")
});

// Routes

// - Add a GET request on '/' route and render 'index.html' file using `res.sendFile`.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// - Add a GET request on '/new' route and render new.html with a html form.
app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/new.html');
});

// - add a post request on '/new' route and display submitted form data
express.urlencoded({ extended: false});

app.post('/new', (req, res) => {
    res.json(req.body);
});

// - add a route with params to grab request made on `/users/1234` or `/users/asdf`

app.get('/users/:username', (req, res) => {
    res.send(req.params.username);
});