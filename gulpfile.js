'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

var input = './sass/main.scss';
var output = './';

gulp.task('sass', function () {
  return gulp.src(input)
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(rename('./style.min.css'))
    .pipe(gulp.dest(output));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});