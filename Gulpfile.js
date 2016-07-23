var gulp = require('gulp'),
    chalk = require('chalk'),
    sass = require('gulp-sass'),
    jade = require('gulp-pug'),
    uglifyjs = require('gulp-uglify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    autoprefixer = require('gulp-autoprefixer'),
    images = require('gulp-imagemin'),
    streamify = require('streamify'),
    paths = {
        scss: './src/scss/**/*.scss',
        images: './src/images/**/*.*',
        jade: './src/templates/**/*.jade',
        scripts: './src/js/**/*.js'
      }

// Browserify task
gulp.task('browserify', function() {
    return browserify('./src/js/main.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./public/assets/js'));
});

// stylesheets
gulp.task('stylesheets', function() {
    return gulp.src('./src/scss/index.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./public/assets/css'));
})

// images
gulp.task('images', function() {
    return gulp.src(path.images)
        // Pass in options to the task
        .pipe(imagemin({
             progressive: true
        }))
        .pipe(gulp.dest('./public/assets/images'));
})

// html
gulp.task('jade', function() {
    return gulp.src(paths.jade)
        .pipe(jade({pretty: true})) // pip to jade plugin
        .pipe(gulp.dest('./public/views')); // tell gulp our output folder
})

// default task runner
gulp.task('default', function() {
    console.log('---------------------------------');
    console.log('  ');
    console.log('working-directory: ./src');
    console.log('usage-directory: ./public');
    console.log('  ');
    console.log('---------------------------------');
    console.log('1. scripts: '+ chalk.bold.cyan(paths.scripts));
    gulp.watch(paths.scripts, ['browserify']);

    console.log('2. styles: '+ chalk.bold.blue(paths.scss));
   gulp.watch(paths.scss, ['stylesheets']);

     console.log(chalk.bold.dim('3. images: '+ paths.images));
   gulp.watch(paths.images, ['images']);

   console.log('4. templates: '+ chalk.bold.green(paths.jade));
    gulp.watch(paths.jade, ['jade']);
    console.log('---------------------------------');
});
