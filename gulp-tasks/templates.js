var gulp = require('gulp'),
    jade = require('gulp-pug');

gulp.task('templates', function() {
    return gulp.src('./src/templates/**/*.jade')
        .pipe(jade({
            pretty: true
        })) // pip to jade plugin
        .pipe(gulp.dest('./public/views')); // tell gulp our output folder
})
