const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');
const path = require('path');
const router = require('./app/router');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, './public')));

app.use(
    session({
        saveUninitialized: true,
        resave: true,
        secret: 'ANCORA TUTTO BUIO',
    })
);

// Nos Routes
app.use(router);

const port = process.env.PORT || 2000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});