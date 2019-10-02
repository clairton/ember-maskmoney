import { find, fillIn, triggerEvent } from '@ember/test-helpers';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-money', 'Integration | Component | input money', {
  integration: true
});

test('money', function(assert) {
  this.set('amount', 0);

  this.render(hbs`{{input-money number=amount thousands='.' decimal=',' prefix='R$ ' }}`);

  this.set('amount', 1234.56);

  assert.equal(find('input').value, 'R$ 1.234,56');
});

test('number', async function(assert) {
  this.set('amount', 0);

  this.render(hbs`{{input-money number=amount thousands='.' decimal=',' suffix=' %' }}`);

  await fillIn('input', '1.234,56 %');
  await triggerEvent('input', 'change');

  assert.equal(this.get('amount'), 1234.56);
});

test('without decimals', async function(assert) {
  this.set('amount', 0);

  this.render(hbs`{{input-money number=amount thousands='.' allowDecimal=false decimal='' precision=0 suffix='' preffix='$'}}`);

  await fillIn('input', '$100');
  await triggerEvent('input', 'change');

  assert.equal(this.get('amount'), 100);
});
