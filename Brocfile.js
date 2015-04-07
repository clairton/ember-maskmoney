/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

app.import(app.bowerDirectory + '/jquery-maskmoney/dist/jquery.maskMoney.js');

module.exports = app.toTree();
