var dest = 'build/',
    src = 'src/';

module.exports = {
    browserSync: {
        server: {
            baseDir: dest
        },
        files: dest + "**"
    },
    html: {
        src: src + "www/**/*.html",
        dest: dest,
        watch: [src + "www/**/*.html", src + "app/components/**/*.html"]
    },
    sass: {
        src: src + "www/css/**/*.scss",
        dest: dest + "css",
        watch: [src + "app/**/*.scss", src + "www/css/**/*.scss"]
    },
    scripts: {
        src: src + "www/scripts/**/*.js",
        dest: dest + "scripts",
        watch: [src + "app/**/*.js", src + "www/scripts/**/*.js"]
    },
    images: {
        src: src + "www/images/**",
        dest: dest + "images",
        watch: src + "www/images/**"
    }
};
