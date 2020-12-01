'use strict';

const path = require('path');

/**
 * Based on `ember-cached-decorator-polyfill`.
 * @see https://github.com/ember-polyfills/ember-cached-decorator-polyfill/blob/main/lib/transpile-modules.js
 */
module.exports = function (babel) {
  const t = babel.types;

  return {
    name: 'ember-cache-decorator-polyfill',
    visitor: {
      ImportDeclaration(path) {
      },
    }
  };
};

// Provide the path to the package's base directory for caching with broccoli
// Ref: https://github.com/babel/broccoli-babel-transpiler#caching
module.exports.baseDir = () => path.resolve(__dirname, '..');