var gulp = require("gulp")
var add = require("gulp-add")
var minimist = require("minimist")

var options = minimist(process.argv.slice(2),{
	string: "name"
})

gulp.task('add-html', function() {

    gulp.src("")
        .pipe(add(options.name+".html",
            `@@include('components/header/header.html',{'page':'`+options.name+`'})

@@include('components/footer/footer.html',{'page':'`+options.name+`'})`))
        .pipe(add("scripts/"+options.name+".js",
            `@@include('components/header/header.js')
@@include('components/footer/footer.js')`))
        .pipe(add("css/"+options.name+".scss",
            `@import 'components/header/header.scss'
@import 'components/footer/footer.scss'`))
        .pipe(gulp.dest('./src/www'));
});
