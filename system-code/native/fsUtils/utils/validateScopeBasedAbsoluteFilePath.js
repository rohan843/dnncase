const RelativePathError = require("../../errors/RelativePathError");
const PathError = require("../../errors/PathError");
const UnboundedScopeError = require("../../errors/UnboundedScopeError");
const ScopeError = require("../../errors/ScopeError");
const path = require("path");
const { Scope } = require("../../constants");
const fs = require("fs");
const { globalAppData } = require("../GlobalAppData");
const projectContext = require("../../projectUtils/ProjectContext");

function validateScopeBasedAbsoluteFilePath(filePath, fileScope) {
  if (!filePath) {
    throw PathError("No path provided.");
  } else if (!path.isAbsolute(filePath)) {
    throw RelativePathError(
      `The path: '${filePath}' is relative. Scope-based path resolution is currently disabled. Please provide full path.`
    );
  } else if (fileScope === Scope.unbounded) {
    throw UnboundedScopeError(
      "Unbounded scope provided to File. Only `project` or `global` scopes may be provided. If any file manipulation external to the system is required, `Exporter` class may be used."
    );
  } else if (fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
    throw PathError(
      `Provided path: '${filePath}' to File exists and is a directory.`
    );
  } else if (
    fileScope === Scope.global &&
    !globalAppData.isPathWithinGlobalArea(filePath)
  ) {
    throw PathError(
      `Provided path: '${filePath}' doesn't lie in global scope.`
    );
  } else if (fileScope === Scope.project) {
    if (!projectContext.isInitialized) {
      throw PathError(
        `A path: ${filePath} with a project scope is provided, but no project is initialized.`
      );
    } else if (!projectContext.isPathWithinProjectArea(filePath)) {
      throw PathError(
        `Provided path: '${filePath}' doesn't lie in project scope.`
      );
    }
  } else {
    throw ScopeError("Invalid scope provided.");
  }
}

module.exports = validateScopeBasedAbsoluteFilePath;
