const projectContext = require("../../ProjectContext");
const ScopeError = require("../../errors/ScopeError");
const UnscopedJSONFile = require("./UnscopedJSONFile");

class ProjectScopedJSONFile extends UnscopedJSONFile {
  constructor(filePath) {
    if (!projectContext.isPathWithinProjectArea(filePath)) {
      throw ScopeError(`Path: "${filePath}" doesn't lie in project area.`);
    }
    super(filePath);
  }
}

module.exports = ProjectScopedJSONFile;
