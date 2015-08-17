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

  options: function () {
    return {
      prefix: this.get('prefix'),
      suffix: this.get('suffix'),
      affixesStay: this.get('affixesStay'),
      thousands: this.get('thousands'),
      decimal: this.get('decimal'),
      precision: this.get('precision'),
      allowZero: this.get('allowZero'),
      allowNegative: this.get('allowNegative')
    };
  }.property(),

  initializeMask: function() {
    this.$().maskMoney(this.get('options'));

    if (this.get('number') !== undefined) {
      var val = this.get('number');
      if (!(val instanceof Number)) {
        val = Number(val);
      }
      val = val.toFixed(this.get('precision'));
      this.$().val(val);
      this.$().maskMoney('mask');
    }
  }.on('didInsertElement'),

  teardownMask: function() {
    this.$().maskMoney('destroy');
  }.on('willDestroyElement'),

  setUnmaskedValue: function() {
    this.set('number', this.$().maskMoney('unmasked')[0]);
  }.observes('value')
});
