const UnscopedFile = require("./UnscopedFile");
const { globalAppData } = require("../../GlobalAppData");
const ScopeError = require("../../errors/ScopeError");

class GlobalScopedFile extends UnscopedFile {
  constructor(filePath) {
    if (!globalAppData.isPathWithinGlobalArea(filePath)) {
      throw ScopeError(`Path: "${filePath}" doesn't lie in global area.`);
    }
    super(filePath);
  }
}

module.exports = GlobalScopedFile;
