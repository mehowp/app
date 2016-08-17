var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var directory = __dirname;
var fs = require('fs');

gulp.task('server', () => {
    var stream = nodemon({
            script: 'backend/index.js' // run ES5 code 
                ,
            watch: 'backend' // watch ES2015 code 
                ,
            tasks: [] // compile synchronously onChange 
        })
        .on('restart', function() {
            console.log('restarted!')
        })
    return stream;
})
