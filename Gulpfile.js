var fs = require('fs');
var gulp = require('gulp');
var directory = __dirname + '/gulp-tasks/';

var files = fs.readdirSync(directory);
var tasks = [],
    paths = {
        javascript: './src/js/**/*.js',
        templates: './src/templates/**/*.jade',
        stylesheets: './src/scss/**/*.scss'
    }

gulp.task('default', function() {
    files.filter(function(file) {
        var taskName = file.substring(0, file.indexOf('.'));
        require(directory + file);
        if (taskName.indexOf('server')) {
            gulp.watch(paths[taskName], [taskName]);
        } else {
            gulp.start(taskName);
        }
    })


});
