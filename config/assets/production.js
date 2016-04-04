'use strict';

var _ = require('lodash'),
    path = require('path'),
    defaultAssets = require(path.resolve('./config/assets/default'));

module.exports = {
  // Override any default asset blocks here or add new blocks
  client: {
    lib: {
      css: defaultAssets.client.lib.css,
      js: _.union(defaultAssets.client.lib.js, [
        'public/lib/angulartics-google-analytics/lib/angulartics-google-analytics.js'
      ]),
      less: defaultAssets.client.lib.less,
      tests: defaultAssets.client.lib.tests
    },
    less: defaultAssets.client.less,
    js: _.union(defaultAssets.client.js, [
      'public/dist/uib-templates.js',
      'public/dist/templates.js',
    ]),
    views: defaultAssets.client.views
  },
};
