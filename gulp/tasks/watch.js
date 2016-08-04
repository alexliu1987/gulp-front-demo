var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
    gulp.watch(config.html.watch || config.html.src, ['html']);
    gulp.watch(config.sass.watch || config.sass.src, ['sass']);
    gulp.watch(config.scripts.watch || config.scripts.src, ['scripts']);
    gulp.watch(config.images.watch || config.images.src, ['images']);
});
