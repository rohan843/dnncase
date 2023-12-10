const UnscopedFile = require("./UnscopedFile");
const projectContext = require("../../ProjectContext");
const ScopeError = require("../../errors/ScopeError");

/**
 * This is the ProjectScopedFile class. Its objects allow access to some file in the project
 * area. This class provides the same methods as the `UnscopedFile`. The only difference is that any
 * provided path is validated using the `projectContext` object's `isPathWithinProjectArea` method 
 * to ensure that the path lies in the project area.
 *
 * @throws {ScopeError}
 */
class ProjectScopedFile extends UnscopedFile {
  constructor(filePath) {
    if (!projectContext.isPathWithinProjectArea(filePath)) {
      throw ScopeError(`Path: "${filePath}" doesn't lie in project area.`);
    }
    super(filePath);
  }
}

module.exports = ProjectScopedFile;
