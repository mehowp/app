var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var directory = __dirname;
var fs = require('fs');

gulp.task('server', function() {;
    nodemon({
            script: 'server.js',
            ext: 'html js',
            ignore: ['ignored.js']
        })
        .on('restart', function() {
            console.log('restarted!')
        })
})
