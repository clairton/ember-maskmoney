module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    return this.addBowerPackageToProject('jquery-maskmoney', '~3.0.2');
  }
};
