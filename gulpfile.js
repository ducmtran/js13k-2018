var gulp          = require('gulp'),
    babel         = require('gulp-babel'),
    webserver     = require('gulp-webserver'),
    opn           = require('opn'),
    concat        = require('gulp-concat'),
    minifyCSS     = require('gulp-minify-css'),
    rename        = require('gulp-rename'),
    uglify        = require('gulp-uglifyes'),
    jshint        = require('gulp-jshint'),
    minifyHTML    = require('gulp-minify-html'),
    replaceHTML   = require('gulp-html-replace'),
    rimraf        = require('gulp-rimraf'),
    ignore        = require('gulp-ignore'),
    zip           = require('gulp-zip'),
    checkFileSize = require('gulp-check-filesize'),
    watch         = require('gulp-watch'),

    serveDir = './src',

    server = {
        host: 'localhost',
        port: '5000'
    },

    distPaths = {
        build: '_build',
        js_build_file: 'game.min.js',
        css_build_file: 'game.min.css'
    },

    sourcePaths = {
        css: [
            'src/css/*.css', 
        ],
        js: [
          "src/js/kontra.js",
          "src/js/input.js",
          "src/js/setup.js",
          "src/js/physics.js",
          "src/js/asteroids.js",
          "src/js/player.js",
          "src/js/menu.js",
          "src/js/playing.js",
          "src/js/level_won.js",
          "src/js/station.js",
          "src/js/gameover.js",
          "src/js/grid.js",
          "src/js/levels.js",
          "src/js/background.js",
          "src/js/game.js"
        ],
        mainHtml: [
            'src/index.html' 
        ]
    };

gulp.task('serve', function () {
    gulp.src(serveDir)
        .pipe(webserver({
            host: server.host,
            port: server.port,
            fallback: 'index.html',
            livereload: false,
            directoryListing: false,
            open: true
    }));
});

gulp.task('openbrowser', function () {
    opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('buildCSS', function () {
    return gulp.src(sourcePaths.css)
        .pipe(concat(distPaths.css_build_file))
        .pipe(minifyCSS())
        .pipe(gulp.dest(distPaths.build));
});

gulp.task('buildJS', function () {
    return gulp.src(sourcePaths.js)
        .pipe(uglify({ 
          mangle: false, 
          ecma: 6 
       }))
        .pipe(concat(distPaths.js_build_file))
        .on('error', function() {
          console.log('sth');
        })
        .pipe(gulp.dest(distPaths.build));
});

gulp.task('buildIndex', function () {
    return gulp.src(sourcePaths.mainHtml)
        .pipe(replaceHTML({
            'css': distPaths.css_build_file,
            'js': distPaths.js_build_file
        }))
          .pipe(rename('index.html'))
          .pipe(minifyHTML())
        .pipe(gulp.dest(distPaths.build));
});

gulp.task('cleanBuild', function () {
    return gulp.src('./_build/*', { read: false })    
        .pipe(ignore('.gitignore'))
        .pipe(rimraf());
});

gulp.task('zipBuild', function () {
    return gulp.src('./_build/*')
        .pipe(zip('game.zip'))
        .pipe(gulp.dest('./_dist'))
        .pipe(checkFileSize({
            fileSizeLimit: 16384 
        }));
});

gulp.task('watch', function () {
    gulp.watch(sourcePaths.css, ['buildCSS', 'zipBuild']);
    gulp.watch(sourcePaths.js, ['buildJS', 'zipBuild']);
    gulp.watch(sourcePaths.mainHtml, ['buildIndex', 'zipBuild']);
});

gulp.task('build', ['buildJS', 'buildCSS', 'buildIndex', 'zipBuild']);
gulp.task('default', ['build', 'serve', 'watch']);

gulp.task('scripts', ['clean'], function () {
  return gulp.src('js/*.js')
    .pipe(uglify().on('error', function(e){
        console.log(e);
     }))
    .pipe(gulp.dest('minjs'));
});
