var gulp = require("gulp");
var concat = require('gulp-concat');
var angularFilesort = require('gulp-angular-filesort');
var strip = require('gulp-strip-line');
var templateCache = require('gulp-angular-templatecache');
var rimraf = require('gulp-rimraf');
var watch = require('gulp-watch');

gulp.task('buildMenuTemplateCache', function() {
    return gulp
        .src([
            './ext-modules/menu/**/*.html'
        ])
        .pipe(templateCache({
            root: 'ext-modules/menu/',
            module: 'psMenu'
        }))
        .pipe(gulp.dest('./ext-modules/menu/'));
});

gulp.task('buildDashboardTemplateCache', function() {
    return gulp
    .src([
        './ext-modules/dashboard/**/*.html'
    ]).pipe(templateCache({
        root: 'ext-modules/dashboard/',
        module:'psDashboard'
    }))
    .pipe(gulp.dest('./ext-modules/dashboard/'));
});

gulp.task('buildFrameworkTemplateCache', function () {
    return gulp
    .src([
        './ext-modules/framework/**/*.html'
    ]).pipe(templateCache({
        root: 'ext-modules/framework/',
        module:'psFramework'
    }))
    .pipe(gulp.dest('./ext-modules/framework/'));
});

gulp.task('buildJavascript', function() {
    return gulp
        .src([
            './ext-modules/**/*.js'
        ])
        .pipe(angularFilesort())
        .pipe(strip(['use strict']))
        .pipe(concat('psFramework.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('buildCSS', function() {
    return gulp
        .src([
            './ext-modules/**/*.css'
        ])
        .pipe(concat('psFramework.css'))
        .pipe(gulp.dest('./dist/'));
});

var paths = {
    bower: "./bower_components/",
    lib: "./lib/"
};

gulp.task("clean", function (cb) {
    rimraf('./dist/', cb);
});

gulp.task('appcss', function() {
    return gulp
        .src([
            './app/**/*.css'
        ])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('appjs', function() {
    return gulp
        .src([
            './app/**/.js'
        ])
        .pipe(angularFilesort())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/'));
});

var stuff_to_watch = [
    "./ext-modules/**/*.{css,js,html}",
    "./app/**/*.{css,js,html}"
];

gulp.task('watch', function () {
    return gulp.watch(stuff_to_watch, ['build']);
});

gulp.task("copy", function () {
    var bower = {
        "angular": "/angular.min.js",
        "angular-route": "/angular-route.min.js",
        "angular-resource": "/angular-resource.min.js",
        "bootstrap": "/dist/**/*.{min.js,map,min.css,ttf,svg,woff,eot}",
        "jquery": "/dist/jquery.min.js",
        "font-awesome": "/css/font-awesome.min.css",
        "angular-gridster": "/dist/*.min.{css,js}",
        "angular-bootstrap": "/*.min.js",
        "ngstorage": "/*.min.js"
    };

    for (var b in bower) {
        gulp.src(paths.bower + b + bower[b])
        .pipe(gulp.dest(paths.lib + b));
    };

    gulp.src(paths.bower + 'font-awesome/fonts/*.{eot,svg,ttf,woff,woff2,otf}')
        .pipe(gulp.dest(paths.lib + 'fonts'));
});

gulp.task('build', [
    'copy',
    'clean',
    'buildMenuTemplateCache',
    'buildDashboardTemplateCache',
    'buildFrameworkTemplateCache',
    'buildJavascript',
    'buildCSS',
    'appjs',
    'appcss'
], function () {
});