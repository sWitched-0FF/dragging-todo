var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('compressJS', function() {
  return gulp.src('app/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('app/assets/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('makeDist', ['compressJS', 'sass'], function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['makeDist']);