'use strict';

const gulp = require('gulp');

gulp.task('default', function() {
  //esli s raznix papok
  //return gulp.src('{source1,source2}/**/*.{js,css}')
  //return gulp.src(['source1/**/*.js', 'source2/**/*.css'])
  //esli chitat ne nado
  //return gulp.src('source/**/*.*', {read: false})
  return gulp.src('source/**/*.*')
    .on('data', function(file) {
      console.log({
        contents: file.contents,
        path:     file.path,
        cwd:      file.cwd,
        base:     file.base,
        relative: file.relative,
        dirname:  file.dirname, 
        basename: file.basename, 
        stem:     file.stem,     
        extname:  file.extname   
      });
    })
    .pipe(gulp.dest(function(file) {
      return file.extname == '.js' ? 'js' :
        file.extname == '.css' ? 'css' : 'dest';
    }));
});