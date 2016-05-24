/**
 * Gulp configuration
 */

var path = require('path');

exports.paths = {};
exports.paths.root = __dirname + '/..';
exports.paths.app = exports.paths.root + '/src';
exports.paths.app_build = exports.paths.root + '/src/build';
exports.paths.tests = exports.paths.root + '/src/app/**/*.spec.js';
exports.paths.blankTemplates = __dirname + '/generators';

exports.sass = {
  watch_src: exports.paths.app + '/**/*.scss',
  src: exports.paths.app + '/app/app.scss',
  routes_src: [
    exports.paths.app + '/**/*.scss',
    '!' + exports.paths.app + '/app/app.scss',
  ],
  dest: exports.paths.app_build
};

exports.js = {
  watch_src: exports.paths.app + '/**/*.js',
  src: exports.paths.app + '/app/app.js',
  dest: exports.paths.app_build + '/build.js'
};

exports.html = {
  watch_src: exports.paths.app + '/**/*.html'
};

exports.resolveTo = function (resolvePath) {
  return function (glob) {
    glob = glob || '';
    return path.resolve(path.join(exports.paths.root, resolvePath, glob));
  };
};

exports.resolveToComponents = exports.resolveTo('src/app/components');
