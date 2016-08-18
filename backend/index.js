const morgan = require('morgan'); // Log requests to console
const bparser = require('body-parser'); // Pull info from HTML POST
const moverride = require('method-override'); // simulate PUT and DELETE
const chalk = require('chalk'); // Color output for console
const fs = require('fs');
const join = require('path').join;

// server side
const express = require('express');

global.app = express(); // Express Framework
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// config and database
global.config = require('./bin/config');

/* definitevly this section shouldn't be touchable */
app.set('models', require('./bin/models'));
app.set('view engine', 'jade');
app.use(express.static(config.templates))
app.use(require('./bin/controllers'));

app.use('/assets', express.static('./public/src/'));
app.use('/maps', express.static('./public/maps'));

/* simple equivalent htaccess for angular */
app.all('/*', (req, res, next) => {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', {
        root: './public/views'
    });
});

//start server
server.listen(config.port, config.ip);
