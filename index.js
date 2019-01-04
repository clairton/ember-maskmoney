/* jshint node: true */
'use strict';

var path = require('path');
var map = require('broccoli-stew').map;
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-maskmoney',
  treeForVendor: function(defaultTree) {
    var jqueryMaskMoneyJSPath = path.join(this.app.project.root, 'node_modules', 'jquery-maskmoney', 'dist');
    var browserVendorLib = new Funnel(jqueryMaskMoneyJSPath, {
      files: ['jquery.maskMoney.min.js']
    });
    browserVendorLib = map(browserVendorLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);
    return defaultTree ? new mergeTrees([defaultTree, browserVendorLib]) : browserVendorLib;
  },
  included(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/jquery.maskMoney.min.js');
  }
};
