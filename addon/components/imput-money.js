import Ember from 'ember';
import accounting from 'accounting';

export default Ember.TextField.extend({
  symbol: 'R$',
  format: '%s %v',
  thousands: '.',
  decimal: ',',
  precision: 2,

  options: Ember.computed('symbol', 'format', 'thousands', 'decimal', 'precision', function() {
    return {
      symbol: this.get('symbol'),
      format: this.get('format'),
      thousands: this.get('thousands'),
      decimal: this.get('decimal'),
      precision: this.get('precision')
    };
  }),

  initializeMask: Ember.on('didInsertElement', function() {
    let self =this;
    Ember.run.once(() => {
      self.propertyDidChange('number');
    });
  }),

  setMaskedValue: Ember.observer('number', 'options', function(){
    let number = parseFloat(this.get('number') || 0);
    let value = accounting.formatMoney(number, this.get('options'));
    this.set('value', value);
  }),

  setUnmaskedValue: Ember.observer('value', 'decimal', function() {
    let value = this.get('value') || '0';
    let number = accounting.unformat(value);//, this.get('decimal')).toFixed(this.get('precision'));
    this.set('number', number);
  })
});
