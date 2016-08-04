var gulp = require("gulp")
var add = require("gulp-add")
var minimist = require("minimist")

var options = minimist(process.argv.slice(2),{
	string: "name"
})

gulp.task('add-component', function() {

    gulp.src("")
        .pipe(add(options.name+".html",""))
        .pipe(add(options.name+".js",""))
        .pipe(add(options.name+".scss",""))
        .pipe(gulp.dest('./src/app/components'));
});
