'use strict';

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const del = require('del');
const concatCSS = require('gulp-concat-css');
const debug = require('gulp-debug');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const combiner = require('stream-combiner2').obj;

//const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('css', function() {
  return combiner(
    gulp.src('frontend/**/index.css'),
    debug({title: 'src'}),
    concatCSS('css/main.css'),
    debug({title: 'concatCSS'}),
    gulp.dest('public')
  ).on('error', notify.onError());
});

gulp.task('clean', function() {
  return del('public');
});

gulp.task('files', function() {
  return gulp.src('frontend/assets/**')
    .pipe(gulp.dest('public'));
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('css', 'files'))
);

gulp.task('watch', function() {
  gulp.watch('frontend/styles/**/*.*', gulp.series('css'));

  gulp.watch('frontend/assets/**/*.*', gulp.series('files'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'public'
  });

  browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', 
  gulp.series(
    'build', 
    gulp.parallel('watch', 'serve')
  )
);
