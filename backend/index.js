const morgan = require('morgan'); // Log requests to console
const bparser = require('body-parser'); // Pull info from HTML POST
const moverride = require('method-override'); // simulate PUT and DELETE
const chalk = require('chalk'); // Color output for console
const fs = require('fs');
const join = require('path').join;

// config and database
const config = require('./lib/config');
const models = join(__dirname, 'bin/models');

// server side
const express = require('express');
const mongoose = require('mongoose'); // MongoDB driver

const app = express(); // Express Framework
const server = require('http').createServer(app);
const io = require('socket.io')(server);


//database
mongoose.connect('mongodb://' + config.db.host + '/' + config.db.name);

// Bootstrap models
fs.readdirSync(models)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => require(join(models, file)));

app.set('view engine', 'jade');

// templates
app.use(express.static(config.templates))

// css and js man files
app.use('/assets', express.static('./public/src/'));

app.use('/maps', express.static('./public/maps'));


app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', {
        root: './public/views'
    });
});

// routes
app.use(require('./lib/routes.js'));

//start server
server.listen(config.port, "0.0.0.0");
