import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-money', 'Integration | Component | input money', {
  integration: true
});

test('money', function(assert) {
  this.set('amount', 0);

  this.render(hbs`{{input-money number=amount thousands='.' decimal=',' prefix='R$ ' }}`);

  this.set('amount', 1234.56);

  assert.equal(this.$('input').val(), 'R$ 1.234,56');
});

test('number', function(assert) {
  this.set('amount', 0);

  this.render(hbs`{{input-money number=amount thousands='.' decimal=',' suffix=' %' }}`);

  this.$('input').val('1.234,56 %');
  this.$('input').change();

  assert.equal(this.get('amount'), 1234.56);
});

test('without decimals', function(assert) {
  this.set('amount', 0);

  this.render(hbs`{{input-money number=amount thousands='.' allowDecimal=false decimal='' precision=0 suffix='' preffix='$'}}`);

  this.$('input').val('$100');
  this.$('input').change();

  assert.equal(this.get('amount'), 100);
});