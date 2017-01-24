module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    return this.addAddonToProject('jquery-maskmoney', '~3.0.2');
  }
};
