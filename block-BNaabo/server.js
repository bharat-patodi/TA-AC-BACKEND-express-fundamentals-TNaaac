let express = require('express');
const app = express();
const PORT = 3030;

// Middleware

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+ '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post('/json', (req, res) => {
    console.log('THE JSON: ', req.body);
    // res.send(req.body);
});

app.post('/contact', (req, res) => {
    console.log(req.body);
});

app.listen(PORT);