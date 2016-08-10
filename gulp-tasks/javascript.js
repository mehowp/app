var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    minify = require('gulp-babel-minify'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    uglifyjs = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

gulp.task('bundle', function() {
    var opts = {};
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('bundle.js'))
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(sourcemaps.write('../maps'))
        // .pipe(minify(opts))
        .pipe(gulp.dest('./public/src/js'));
})

gulp.task('min', function() {
    return gulp.src('./public/src/js/bundle.js')
         .pipe(uglifyjs().on('error', function(e){
               console.log(e);
          }))
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('./public/src/js'));
})


gulp.task('javascript', ['bundle', 'min'])