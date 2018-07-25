/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-maskmoney',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/jquery.maskMoney.min.js');

  },
  treeForVendor: function() {
    var jqueryMaskMoneyJSPath = path.join(this.app.project.root, 'node_modules', 'jquery-maskmoney', 'dist');
    var vendorTree = new Funnel(jqueryMaskMoneyJSPath, {
      files: ['jquery.maskMoney.min.js']
    });
    return vendorTree;
  },
};
