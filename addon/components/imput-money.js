import Ember from 'ember';

export default Ember.TextField.extend({
  prefix: '',
  suffix: '',
  affixesStay: false,
  thousands: ',',
  decimal: '.',
  precision: 2,
  allowZero: true,
  allowNegative: false,
  allowDecimal: true,

  options: function() {
    return {
      prefix: this.get('prefix'),
      suffix: this.get('suffix'),
      affixesStay: this.get('affixesStay'),
      thousands: this.get('thousands'),
      decimal: this.get('decimal'),
      precision: this.get('precision'),
      allowZero: this.get('allowZero'),
      allowNegative: this.get('allowNegative'),
      allowDecimal: this.get('allowDecimal')
    };
  }.property(),

  initializeMask: function() {
    this.$().maskMoney(this.get('options'));
    this.propertyDidChange('number');
  }.on('didInsertElement'),

  teardownMask: function() {
    this.$().maskMoney('destroy');
  }.on('willDestroyElement'),

  setMaskedValue: function() {
    let number = parseFloat(this.get('number') || 0).toFixed(this.get('precision'));
    let val = number.toString().replace('.', this.get('decimal'));
    this.$().val(val);
    this.$().maskMoney('mask');
  }.observes('number'),

  setUnmaskedValue: function() {
    if(this.get('allowDecimal')){
      this.set('number', this.$().maskMoney('unmasked')[0]);
    } else {
      this.set('number', this.get('value').replace(/[^0-9]/g, ''));
    }
  }.observes('value')
});
