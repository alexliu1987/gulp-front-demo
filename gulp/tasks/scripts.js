var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var uglify = require('gulp-uglify');
var config = require('../config').scripts;

gulp.task('scripts', function(){
  return gulp.src(config.src)
  	.pipe(fileinclude({basepath:"src/app/"}))
  	.pipe(uglify())
    .pipe(gulp.dest(config.dest));
});