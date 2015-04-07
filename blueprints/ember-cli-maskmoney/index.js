module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackageToProject('jquery-maskmoney', '~3.0.2');
  }
};
