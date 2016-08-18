var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    uglifyjs = require('gulp-uglify'),
    eslint = require('gulp-eslint');

gulp.task('lint', () => {

    return gulp.src(['src/js/**/*.js', 'backend/bin/**/*.js'])
        .pipe(eslint({configFile: 'eslint.json'}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('bundle', ['lint'], function() {
    var opts = {};
    return gulp.src(['src/js/main.js', 'src/js/**/*.js'])
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
        .pipe(uglifyjs().on('error', function(e) {
            console.log(e);
        }))
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('./public/src/js'));
})


gulp.task('javascript', ['bundle', 'min'])
