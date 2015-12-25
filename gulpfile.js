var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('sass', function() {
  return gulp.src('./app/assets/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
  return gulp.src('./app/**/*.svg')
    .pipe(gulp.dest('./dist'));
});

gulp.task('browserify', function() {
    return browserify('./app/app.js')
        .bundle()
		.pipe(source('app.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        port: 9000
    })
});

gulp.task('makeDist', ['browserify', 'sass', 'images'], function() {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch(['./app/**/*.js', './app/**/*.scss', './app/**/*.html'], ['makeDist']);
})

gulp.task('default', ['makeDist', 'watch', 'connect']);