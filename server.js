'use strict';
var gulp = require('gulp');

// generate full frontend for development
setTimeout(function() {
    require('./Gulpfile');
    gulp.start('default');
}, 1)

//express
setTimeout(function() {
  require('./backend/index');
}, 5);
