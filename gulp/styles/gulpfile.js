'use strict';

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');

const concat = require('gulp-concat');
var concatCSS = require('gulp-concat-css');

const debug = require('gulp-debug');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

//vse v odin tupo
gulp.task('skleit:css', function() {

  return gulp.src('frontend/**/.css')
    .pipe(debug({title: 'src'}))
    .pipe(concat('all.css'))
    .pipe(debug({title: 'concat'}))
    .pipe(gulp.dest('public'));
});

//vse odin iz index css
gulp.task('main:css', function() {

  return gulp.src('frontend/**/index.css')
    .pipe(debug({title: 'src'}))
    .pipe(concatCSS('css/main.css'))
    .pipe(debug({title: 'concatCSS'}))
    .pipe(gulp.dest('public'));
});

gulp.task('source:map', function() {

  return gulp.src('frontend/**/index.css')
  	.pipe(gulpIf(isDevelopment, sourcemaps.init()))	
    // deystvie
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest('public'));
});

