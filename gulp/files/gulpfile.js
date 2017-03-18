'use strict';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function() {
  return del('public');
});

gulp.task('assets', function() {
  return gulp.src('frontend/assets/**')
      .pipe(gulp.dest('public'));
});


gulp.task('build', gulp.series('clean','assets'));