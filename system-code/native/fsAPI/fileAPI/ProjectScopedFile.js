const UnscopedFile = require("./UnscopedFile");
const projectContext = require("../../ProjectContext");
const ScopeError = require("../../errors/ScopeError");

class ProjectScopedFile extends UnscopedFile {
  constructor(filePath) {
    if (!projectContext.isPathWithinProjectArea(filePath)) {
      throw ScopeError(`Path: "${filePath}" doesn't lie in project area.`);
    }
    super(filePath);
  }
}

module.exports = ProjectScopedFile;
