var express = require('express'),
    app = express(), // Express Framework
    mongoose = require('mongoose'), // MongoDB driver
    morgan = require('morgan'), // Log requests to console
    bparser = require('body-parser'), // Pull info from HTML POST
    moverride = require('method-override'), // simulate PUT and DELETE
    chalk = require('chalk'), // Color output for console
    config = require('./lib/config');


app.set('view engine', 'jade');

// templates
app.use(express.static(config.templates))

// css and js man files
app.use('/bundle.js', express.static(config.assets.js + '/bundle.js'));
app.use('/main.css', express.static(config.assets.css + '/index.css'));

// assets
app.use('/assets/js', express.static(config.assets.js));
app.use('/assets/css', express.static(config.assets.css));
app.use('/assets/images', express.static(config.assets.images));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: './public/views' });
});


app.use(require('./lib/routes.js'))
app.listen(config.port);
