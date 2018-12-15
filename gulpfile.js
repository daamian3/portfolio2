'use strict';

const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

const input = './sass/**/*.scss';
const output = './';

gulp.task('sass', function () {
  return gulp.src(input)
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(output));
});

gulp.task('sass:watch', function () {
  gulp.watch(input, gulp.series('sass'));
});