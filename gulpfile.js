var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('uglify', function() {
  return gulp.src('app/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  return gulp.src('app/assets/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('makeDist', ['uglify', 'sass'], function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist'));
});

var watcher = gulp.watch(['app/**/*.js','app/**/*.scss','app/**/*.html'], ['makeDist']);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['makeDist']);