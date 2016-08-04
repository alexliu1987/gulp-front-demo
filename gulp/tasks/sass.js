var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var minifycss = require('gulp-minify-css');
var config = require('../config').sass;

gulp.task('sass', function() {
    return sass(config.src, { style: 'expanded' })
        .pipe(plumber())
        .pipe(changed(config.src))
        .pipe(minifycss({
            "compatibility": "ie7"
        }))
        .pipe(gulp.dest(config.dest));
});
