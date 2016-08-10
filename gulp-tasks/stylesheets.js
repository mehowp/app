var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    precss = require('precss'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    nested = require('postcss-nested');

gulp.task('stylesheets', function() {
    var processors = [nested, autoprefixer, precss, cssnano];
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./public/src/css'));
})
