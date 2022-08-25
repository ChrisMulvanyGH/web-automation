const express = require('express');
const app = express();
const getGenres = require('./scrapeGenres');
const getBook = require('./pickRandomBook');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const hostname = 'localhost';
const port = 3000;

// APP TEMPLETING
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// APP MIDDLEWARE
app.use(bodyParser.json());

// APP ROUTES
app.get('/', async(req, res) => {
    const genres = await getGenres.scrapeGenres();
    res.render('index', { genres });
});

// APP SERVER SETUP 
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});