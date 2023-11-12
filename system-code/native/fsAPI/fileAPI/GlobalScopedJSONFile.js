const { globalAppData } = require("../../GlobalAppData");
const ScopeError = require("../../errors/ScopeError");
const UnscopedJSONFile = require("./UnscopedJSONFile");

class GlobalScopedJSONFile extends UnscopedJSONFile {
  constructor(filePath) {
    if (!globalAppData.isPathWithinGlobalArea(filePath)) {
      throw ScopeError(`Path: "${filePath}" doesn't lie in global area.`);
    }
    super(filePath);
  }
}

module.exports = GlobalScopedJSONFile;
