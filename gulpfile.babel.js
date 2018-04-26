'use strict';

import browser from 'browser-sync';
import gulp from 'gulp';
import rimraf from 'rimraf';
import plugins from 'gulp-load-plugins';
import yaml from 'js-yaml';
import fs from 'fs';
import yargs from 'yargs';
import webpackStream from 'webpack-stream';
import webpack2 from 'webpack';
import named from 'vinyl-named';
import globSass from 'gulp-sass-glob';
// Load all Gulp plugins into one variable
const $ = plugins();

// Check for --production flag
const PRODUCTION = !!(yargs.argv.production);


// Load settings from settings.yml
const {
    COMPATIBILITY,
    PORT,
    URL,
    ASSETS_DIR,
    REMOTE_ASSETS_PATH,
    LOCALPROXY,
    PATHS
} = loadconfig();

function loadconfig() {
    let ymlfile = fs.readFileSync('config.yml', 'utf8');
    return yaml.load(ymlfile);
}

//=================
// gulp tasks
//=================

// build the "dist" folder by running all of the below tasks
gulp.task('build',
    //gulp.series(clean, gulp.parallel(pages, sass, javascript, images, copy), styleguide));
    gulp.series(clean, gulp.parallel(sass, javascript, images, copy)));

// Build the site, run the server, and watch for file changes
gulp.task('brute',
    gulp.series('build', serverRemote, watch));

// Build the site, run the server, and watch for file changes
gulp.task('default',
    //gulp.series('build', server, watch));
    gulp.series('build', serverRemote, watch));

//==================
// Process Functions
//==================

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
    rimraf(PATHS.dist, done);
}

// Copy files out of the assets folder
// This task skips over the "img", "js", and "scss" folders, which are parsed separately
function copy() {
    return gulp.src(PATHS.assets)
        .pipe(gulp.dest(PATHS.dist + '/assets'));
}

// Compile Sass into CSS
// In production, the CSS is compressed
function sass() {
    //return gulp.src('src/assets/scss/lmmi-2015.styles.scss')
    return gulp.src(PATHS.scss)
    //return gulp.src('src/assets/scss/**/*.scss')
        .pipe(globSass())
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            includePaths: PATHS.sass
        })
            .on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: COMPATIBILITY
        }))
    // Comment in the pipe below to run UnCSS in production
    //.pipe($.if(PRODUCTION, $.uncss(UNCSS_OPTIONS)))
        .pipe($.if(PRODUCTION, $.cleanCss({
            compatibility: 'ie9'
        })))
        .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
        .pipe(gulp.dest(PATHS.dist + '/assets/css'))
        .pipe(browser.reload({
            stream: true
        }));
}

let webpackConfig = {
    rules: [{
        test: /.js$/,
        use: [{
            loader: 'babel-loader'
        }]
    }]
}
// Combine JavaScript into one file
// In production, the file is minified
function javascript() {
    return gulp.src(PATHS.entries)
        .pipe(named())
        .pipe($.sourcemaps.init())
        .pipe(webpackStream({
            module: webpackConfig
        }, webpack2))
        .pipe($.if(PRODUCTION, $.uglify()
            .on('error', e => {
                console.log(e);
            })
        ))
        .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
        .pipe(gulp.dest(PATHS.dist + '/assets/js'));
}

// Copy images to the "dist" folder
// In production, the images are compressed
function images() {
    return gulp.src('src/assets/img/**/*')
        .pipe($.if(PRODUCTION, $.imagemin({
            progressive: true
        })))
        .pipe(gulp.dest(PATHS.dist + '/assets/img'));
}

// Start a server with BrowserSync to preview the site in
function server(done) {
    browser.init({
        //server: PATHS.dist, port: PORT
        proxy: LOCALPROXY,
        port: PORT,
        injectChanges: true
    });
    done();
}

// Start a proxy server with Browsersync + regex file swapping
function serverRemote(done) {

    var PATH_STRING = REMOTE_ASSETS_PATH.replace(/\//g, '\\/');
    var REGEX = new RegExp(PATH_STRING, 'g');

    browser.init({

        // proxy live site
        proxy: URL,
        // serve up these local files
        serveStatic: [ASSETS_DIR],
        //logLevel: "debug",
        //logFileChanges: true,
        //open: false,
        injectChanges: true,
        // Watch this stuff for changes and inject it if it does
        files: ASSETS_DIR + '/**',
        // modify url of the remote assets so they point to the locally served version
        rewriteRules: [{

            match: REGEX,
            fn: function(matched) {
                return ''
            }
        }]
    });
    done();
}

// Reload the browser with BrowserSync
function reload(done) {
    browser.reload();
    done();
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch() {
    gulp.watch(PATHS.assets, copy);
    gulp.watch('src/assets/scss/**/*.scss').on('all', sass);
    gulp.watch('src/assets/js/**/*.js').on('all', gulp.series(javascript, browser.reload));
    gulp.watch('src/assets/img/**/*').on('all', gulp.series(images, browser.reload));
}
