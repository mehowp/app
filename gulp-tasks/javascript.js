var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babel = require('babelify'),
    nodemon = require('nodemon');


gulp.task('javascript', function() {
    var bundler = watchify(browserify('./src/js/main.js', {
        debug: true
    }).transform(babel));

    function rebundle() {
        bundler.bundle()
            .on('error', function(err) {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('./src/js/main.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('./public'));
    }


    bundler.on('update', function() {
        console.log('-> bundling...');
        rebundle();
    });

    rebundle();
})
