(function() {
  'use strict';
  var gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      maps = require('gulp-sourcemaps'),
      del = require('del'),
      webserver = require('gulp-webserver'),
      plumber = require('gulp-plumber');

  // gulp.task('task-name', function(){
  //   stuff here
  // });

  gulp.task('concatScripts', function(){
    return gulp.src([
      'src/js/**/*.js',
      'src/js/*.js'
    ])
    .pipe(plumber())
    .pipe(concat('app.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/'));
  });

  gulp.task('concatCss', function(){
      return gulp.src([
          'src/*.css',
          'src/js/components/**/*.css'
      ])
      .pipe(plumber())
      .pipe(concat('app.css'))
      .pipe(gulp.dest('dist/'));
  });

  gulp.task('moveImg', function(){
      return gulp.src('src/img/**.png')
      .pipe(gulp.dest('./dist/img'));
  });

  // gulp.task('uglifyScripts', ['concatScripts'], function(){
  //   return gulp.src('dist/app.js')
  //   .pipe(uglify())
  //   .pipe(rename('app.min.js'))
  //   .pipe(gulp.dest('dist/'));
  // });

  // gulp.task('compileSass', function(){
  //   return gulp.src('src/scss/application.scss')
  //   .pipe(maps.init())
  //   .pipe(sass())
  //   .pipe(maps.write('./'))
  //   .pipe(gulp.dest('src/css'));
  // });

  gulp.task('moveIndex', function(){
    return gulp.src('src/index.html')
    .pipe(gulp.dest('./dist'));
  });

  gulp.task('moveHtml', function(){
    return gulp.src(['src/views/*.html','src/js/components/**/*.html'])
    .pipe(gulp.dest('./dist/views'));
  });

  // gulp.task('moveCss', function(){
  //   return gulp.src('src/styles.css')
  //   .pipe(gulp.dest('dist/'));
  // });

  // gulp.task('moveComponentsCss', function(){
  //   return gulp.src('src/js/components/**/*.css')
  //   .pipe(gulp.dest('dist/views'));
  // });

  gulp.task('webserver', function(){
    return gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      open: true,
    }));
  });

  gulp.task('clearTempJs', function(){
    return del([
      'dist/app.js',
      'dist/app.min.js'
    ]);
  });

  gulp.task('watch', function(){
    gulp.watch(['src/js/*.js', 'src/js/**/*.js', 'src/*.css', 'src/index.html', 'src/views/*.html','src/js/components/**/*.html', 'src/js/components/**/*.css', 'src/img/**.png'], ['concatScripts','moveHtml','moveIndex','concatCss', 'moveImg']);
  });

  gulp.task('build', ['concatScripts','clearTempJs', 'moveHtml', 'moveIndex','concatCss', 'moveImg', 'watch']);

  gulp.task('default', ['build', 'webserver']);
}());
