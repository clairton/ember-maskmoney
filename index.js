/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-maskmoney',
  included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/jquery-maskmoney/dist/jquery.maskMoney.js');
  }
};
