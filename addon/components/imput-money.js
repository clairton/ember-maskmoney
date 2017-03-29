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

  options: Ember.computed('prefix', 'suffix', 'affixesStay', 'thousands', 'decimal', 'precision', 'allowZero', 'allowNegative', 'allowDecimal', function() {
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
  }),

  initializeMask: Ember.on('didInsertElement', function() {
    let self =this;
    Ember.run.once(() => {
      self.$().maskMoney(self.get('options'));
      if((self.get('allowZero') && (self.get('number') !== undefined)) || self.get('number')){  
        self.propertyDidChange('number');
      }
    });
  }),

  teardownMask: Ember.on('willDestroyElement', function() {
    this.$().maskMoney('destroy');
  }),

  setMask: Ember.observer('options', function(){
    this.$().maskMoney('destroy');
    this.$().maskMoney(this.get('options'));
  }),

  setMaskedValue: Ember.observer('number', 'precision', 'decimal', function(){
    let number = parseFloat(this.get('number') || 0).toFixed(this.get('precision'));
    let val = number.toString().replace('.', this.get('decimal'));
    this.$().val(val);
    this.$().maskMoney('mask');
  }),

  setUnmaskedValue: Ember.observer('value', 'allowDecimal', function() {
    if(this.get('allowDecimal')){
      this.set('number', this.$().maskMoney('unmasked')[0]);
    } else {
      this.set('number', this.get('value').replace(/[^0-9]/g, ''));
    }
  })
});
