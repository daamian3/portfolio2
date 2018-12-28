'use strict';

const gulp = require('gulp'),
      rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      minify = require('gulp-minify'),
      concat = require('gulp-concat'),
      input_sass = './sass/main.scss',
      input_js = './scripts/',
      output = './';

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src(input_sass)
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(rename('./style.min.css'))
    .pipe(gulp.dest(output));
});

gulp.task("js", function () {
    return gulp.src([input_js+'jquery.min.js', input_js+'**/!(jquery.min)*.js'])
        .pipe(concat("app.bundle.min.js"))
        .pipe(minify())
        .pipe(gulp.dest(output));
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./scripts/**/*.js', gulp.series('js'));
});
