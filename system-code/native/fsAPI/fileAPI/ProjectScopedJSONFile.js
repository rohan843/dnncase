const projectContext = require("../../ProjectContext");
const ScopeError = require("../../errors/ScopeError");
const UnscopedJSONFile = require("./UnscopedJSONFile");

/**
 * This is the ProjectScopedJSONFile class. Its objects allow access to some json file in the 
 * project area. This class provides the same methods as the `UnscopedFile`. The only difference is 
 * that any provided path is validated using the `projectContext` object's `isPathWithinProjectArea` 
 * method to ensure that the path lies in the project area.
 *
 * @throws {ScopeError}
 */
class ProjectScopedJSONFile extends UnscopedJSONFile {
  constructor(filePath) {
    if (!projectContext.isPathWithinProjectArea(filePath)) {
      throw ScopeError(`Path: "${filePath}" doesn't lie in project area.`);
    }
    super(filePath);
  }
}

module.exports = ProjectScopedJSONFile;
