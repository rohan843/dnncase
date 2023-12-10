const { checkIfChildPathIsValid } = require("./fsAPI/pathUtils/checkIfChildPathIsValid");

class ProjectContext {
  constructor() {
    this.projectDir = null;
  }
  get isInitialized() {
    return false;
  }
  /**
   * Takes a path string and checks if it lies in the project directory.
   * @param {string} queryPath Must be an absolute path. This is **NOT** validated within this 
   * method.
   * @returns {boolean} `true` if path lies in project area, else `false`.
   */
  isPathWithinProjectArea(queryPath) {
    if (!this.isInitialized) {
      return false;
    }
    return checkIfChildPathIsValid({
      child: queryPath,
      parent: this.projectDir,
    });
  }
}

/**
 * The project's context will be exposed via this object.
 * @satisfies This is the **ONLY** source of truth for the current project's directory path, if a project is open.
 */
const projectContext = new ProjectContext();

module.exports = projectContext;
