/*
 * Proxy Live site and inject local files
 *  - run 'npm install --save-dev browser-sync'
 *  - change the varables below as needed
 *  - 'node bsProxy' to run the task
 */
//
//initialize all of our variables
var PATH_STRING, PROXY, ASSETS_DIR, REMOTE_ASSETS_PATH, REGEX, browserSync, serveStatic;

// Url of the site to be proxied
PROXY              = 'www.lmmontgomery.ca';
// Root assets folder (contains /css/, /js/ etc)
ASSETS_DIR         = 'dist/assets';
// Path on server to remote assets folder (escape the slashes; no trailing slash)
//REMOTE_ASSETS_PATH = 'http://www.lmmontgomery.ca/sites/www.lmmontgomery.ca/themes/lmmi_2015';
REMOTE_ASSETS_PATH = 'http://www.lmmontgomery.ca/sites/www.lmmontgomery.ca/themes/lmmi_2015/dist/assets';
PATH_STRING = REMOTE_ASSETS_PATH.replace(/\//g, '\\/');
//PATH_STRING = 'www.lmmontgomery.ca';

//===================================
// Includes and vars
browserSync = require('browser-sync');
serveStatic = require('serve-static');
//REGEX       = new RegExp( PATH_STRING, 'g');
REGEX       = new RegExp( PATH_STRING, 'g');
//===================================


/*
 * Browsersync Task
 *
 */

browserSync({

    // proxy live site
    proxy: PROXY,
    // serve up these local files
    serveStatic: [ASSETS_DIR],
    //logLevel: "debug",
    //logFileChanges: true,
    //open: false,
    injectChanges: true,

    ////// Watch this stuff for changes and inject it if it does
    //files: ASSETS_DIR + '/**',
    //// modify url of the remote assets so they point to the locally served version
    //[>
    rewriteRules: [
        {

            //match: /REMOTE_ASSETS_PATH/g,
            match: REGEX,
            fn: function(matched) { return '' }
            //match: REGEX,
            //fn: function (req, res, match) {
                //return '';
            //}
        }
    ]
});
console.log(PATH_STRING);
