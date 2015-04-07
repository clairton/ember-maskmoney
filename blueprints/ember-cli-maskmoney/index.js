module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('jquery-maskmoney', '~3.0.2');
  }
};
