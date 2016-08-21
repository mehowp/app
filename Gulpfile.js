var gulp = require('gulp'),
    exec = require('gulp-exec'),
    fs = require('fs'),
    nodemon = require('gulp-nodemon'),
    jade = require('gulp-jade');
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify'),
    uglifyjs = require('gulp-uglify'),
    eslint = require('gulp-eslint');

/* templates */
gulp.task('jade', function() {
    return gulp.src('./src/templates/**/*.jade')
        .pipe(jade({
            pretty: true
        })) // pip to jade plugin
        .pipe(gulp.dest('./public/views')); // tell gulp our output folder
})
/* node scripts */
gulp.task('node-tasks', (cb) => {
    return require(__dirname + '/backend/tasks.js')();
})

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

/* node server */
gulp.task('start', function() {
    nodemon({
        script: 'backend/server.js',
        ext: 'scss js jade',
        ignore: ["public/*"],
        env: {
            'NODE_ENV': 'development'
        },
        tasks: ['node-tasks', 'jade', 'javascript']
    })
})

gulp.task('default', ['start'])
