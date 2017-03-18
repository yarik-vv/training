'use strict';

const gulp = require('gulp');
//const gulpIf = require('gulp-if');
const del = require('del');
const concatCSS = require('gulp-concat-css');
const debug = require('gulp-debug');
const newer = require('gulp-newer');

const remember = require('gulp-remember');
const cached = require('gulp-cached');
const path = require('path');

//const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('css', function() {
  return gulp.src('frontend/**/index.css')
    .pipe(cached('styles'))
    .pipe(remember('styles'))
    .pipe(debug({title: 'css'}))
    .pipe(concatCSS('css/main.css'))
    .pipe(gulp.dest('public'));
});

gulp.task('clean', function() {
  return del('public');
});

gulp.task('files', function() {
  return gulp.src('frontend/assets/**', {since: gulp.lastRun('files')})
    .pipe(newer('public'))
    .pipe(debug({title: 'files'}))
    .pipe(gulp.dest('public'));
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('css', 'files'))
);

gulp.task('watch', function() {

  gulp.watch('frontend/styles/**/*.css', gulp.series('css')).on('unlink', function(filepath) {
    remember.forget('styles', path.resolve(filepath));
    delete cached.caches.styles[path.resolve(filepath)];
  });

  gulp.watch('frontend/assets/**/*.*', gulp.series('files'));
});

gulp.task('dev', gulp.series('build', 'watch'));
