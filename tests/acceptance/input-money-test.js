import Ember from "ember";
import { moduleFor, test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

moduleFor('component:input-money', "Acceptance: Input Money", {
  beforeEach: function(){
    App = startApp();
  },
  afterEach: function(){
    Ember.run(App, 'destroy');
  }
});

test('Value', function(assert) {
  visit('/').then(() => {
    fillIn('input#valor', 'R$ 1.234,56').then(() => {
      assert.equal(find('.value').text(), '1234.56');
    });
  });
});