//run this with 'node bs'
var browserSync = require('browser-sync');
var findCss     = new RegExp("<link.*" + "upei_vre_footer" + "*\/css\/upei_vre_footer.*", "g");
//var findJs      = new RegExp("<script.*" + THEMENAME + "*\/dist\/assets\/js\/app.*", "g");
var PROXY       = 'https://biomedical-optics.discoveryspace.ca/';
// root assets dir (contains /css/ and /js/ etc)
var assetsDir   = '.';
// path to file within assets dir
var fileReplace = '/css/upei_vre_footer.css';
var replaceCss = '<link rel="stylesheet" type="text/css" href="' + fileReplace + '"/>';
//===========================
browserSync({
    proxy: PROXY,
    serveStatic: [assetsDir],
    files: fileReplace,
    rewriteRules: [
        {
            match: findCss,
            fn: function (req, res, match) {
                return replaceCss;
            }
        }
    ]

});
