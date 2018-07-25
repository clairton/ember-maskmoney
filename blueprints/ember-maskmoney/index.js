module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    return this.addPackageToProject('jquery-maskmoney', '~3.0.2');
  }
};
