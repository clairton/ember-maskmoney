import { run } from '@ember/runloop';
import { module, test } from 'ember-qunit';
import startApp from '../helpers/start-app';

let application;

module('Acceptance: Input Money', {
  beforeEach() {
    application = startApp();
  },
  afterEach() {
    if (application) {
      run(application, 'destroy');
    }
  }
});

test('Value', function(assert) {
  visit('/').then(() => {
    fillIn('input#valor', 'R$ 1.234,56').then(() => {
      assert.equal(find('.value').text(), '1234.56');
    });
  });
});
