class ProjectContext {
  get isInitialized() {
    return false;
  }
}

const projectContext = new ProjectContext();

module.exports = projectContext;
