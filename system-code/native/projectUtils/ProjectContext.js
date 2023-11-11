const checkIfChildPathIsValid = require("../fsUtils/utils/checkIfChildPathIsValid");

class ProjectContext {
  constructor() {
    this.projectDir = null;
  }
  get isInitialized() {
    return false;
  }
  /**
   * Takes a path string and checks if it lies in the project directory.
   * @param {string} queryPath Must be an absolute path. This is **NOT** validated within this method.
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

const projectContext = new ProjectContext();

module.exports = projectContext;