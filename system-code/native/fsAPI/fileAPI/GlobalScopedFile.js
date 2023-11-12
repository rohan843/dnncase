const UnscopedFile = require("./UnscopedFile");
const { globalAppData } = require("../../GlobalAppData");
const ScopeError = require("../../errors/ScopeError");

/**
 * This is the GlobalScopedFile class. Its objects allow access to some file in the global project 
 * area. This class provides the same methods as the `UnscopedFile`. The only difference is that any 
 * provided path is validated using the `globalAppData` object's `isPathWithinGlobalArea` method to 
 * ensure that the path lies in the global area.
 * 
 * @throws {ScopeError}
 */
class GlobalScopedFile extends UnscopedFile {
  constructor(filePath) {
    if (!globalAppData.isPathWithinGlobalArea(filePath)) {
      throw ScopeError(`Path: "${filePath}" doesn't lie in global area.`);
    }
    super(filePath);
  }
}

module.exports = GlobalScopedFile;
