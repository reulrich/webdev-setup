
// global requirements
var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

// directories & settings
const settings = {
    assetsDir: '/assets',
    cssDir: '/assets/css',
    distDir: './dist',
    docsDir: './docs',
    fontsDir: '/assets/fonts',
    imgDir: '/assets/img',
    jsDir: '/assets/js',
    publicDir: '.',
    sassDir: './src/sass',
    srcDir: './src'
};
 
// launch browsersync, watch for sass changes
gulp.task('bs', function() {

    /**
     * Launch BrowserSync from publicDir
     */
    browserSync.init({
        server: settings.distDir,
        watch: true,
        index: "index.html", /* index.html is standard and could be changed to "whatever.html" */
        browser: "chrome.exe",
        notify: true,
        injectChanges: false,
        files: [settings.distDir + "/**/*.css", settings.distDir + "js/*.js", settings.distDir + "/**/*.html"],
    });
    // run the sass-tasks and copyassets on filechanges 
    gulp.watch(settings.sassDir + '/**/*.scss', gulp.series('sass')); 
    gulp.watch(settings.srcDir + '/**/*.html', gulp.series('copyassets')); 
});

// compile sass files
gulp.task('sass', function() {
    return gulp.src(settings.sassDir + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(settings.distDir + settings.cssDir))
        .pipe(browserSync.stream());
});

// minify css files
gulp.task('minify-css', () => {
  return gulp.src(settings.distDir + '/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest(settings.distDir));
})

// copy assets (scripts, images, fonts etc.)
gulp.task('copyassets', function(done) {
    gulp.src(settings.srcDir + '/**/*.html')
    .pipe(gulp.dest(settings.distDir));
    gulp.src([settings.srcDir + settings.assetsDir + '/**/*'])
    .pipe(gulp.dest(settings.distDir + settings.assetsDir));
    gulp.src([settings.srcDir + settings.cssDir + '/**/*'])
    .pipe(gulp.dest(settings.distDir + settings.cssDir));
    gulp.src([settings.srcDir + settings.docsDir + '/**/*'])
    .pipe(gulp.dest(settings.distDir + settings.docsDir));
    gulp.src([settings.srcDir + settings.fontsDir + '/**/*'])
    .pipe(gulp.dest(settings.distDir + settings.fontsDir));
    gulp.src([settings.srcDir + settings.imgDir + '/**/*'])
    .pipe(gulp.dest(settings.distDir + settings.imgDir));
    gulp.src([settings.srcDir + settings.jsDir + '/**/*'])
    .pipe(gulp.dest(settings.distDir + settings.jsDir));
    gulp.src(settings.srcDir + '/**/*.properties')
    .pipe(gulp.dest(settings.distDir));
    done() //callback for Gulp4
});

/**
'serve' will combine the following functions:
- watch for changes of .scss-files and compile sass to your distribution directory
- watch for changes of html, css and js files in the source directory
- minify css & copy relevant assets to your distribution directory
- launch browserSync with index.html 
 **/

gulp.task('serve', gulp.series('sass', 'minify-css', 'copyassets', 'bs', function() {
}));