const RelativePathError = require("../../errors/RelativePathError");
const PathError = require("../../errors/PathError");
const UnboundedScopeError = require("../../errors/UnboundedScopeError");
const ScopeError = require("../../errors/ScopeError");
const path = require("path");
const { Scope } = require("../../constants");
const fs = require("fs");

// TODO: These 2 imports facilitate access to functions that ensure the provided path lies in the provided scope. But, they are giving rise to circ. deps. rectify this.
const { globalAppData } = require("../GlobalAppData");
const projectContext = require("../../projectUtils/ProjectContext");

/**
 * @typedef {"global" | "project" | "unbounded"} ScopeType
 */

/**
 * A function that checks if a provided path is absolute, lies within a provided scope, and can be used as a path to a file. Throws an error on any validation issues.
 * @param {string} filePath The path to validate.
 * @param {ScopeType} fileScope The scope with respect to which validation must occur.
 *
 * @throws PathError -> RelativePathError
 * @throws ScopeError -> UnboundedScopeError
 */
function validateScopeBasedAbsoluteFilePath(filePath, fileScope) {
  if (!filePath) {
    throw new PathError("No path provided.");
  } else if (!path.isAbsolute(filePath)) {
    throw new RelativePathError(
      `The path: '${filePath}' is relative. Scope-based path resolution is currently disabled. Please provide full path.`
    );
  } else if (fileScope === Scope.unbounded) {
    throw new UnboundedScopeError(
      "Unbounded scope provided to File. Only `project` or `global` scopes may be provided. If any file manipulation external to the system is required, `Exporter` class may be used."
    );
  } else if (fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
    throw new PathError(
      `Provided path: '${filePath}' to File exists and is a directory.`
    );
  } else if (
    fileScope === Scope.global &&
    !globalAppData.isPathWithinGlobalArea(filePath)
  ) {
    throw new PathError(
      `Provided path: '${filePath}' doesn't lie in global scope.`
    );
  } else if (fileScope === Scope.project) {
    if (!projectContext.isInitialized) {
      throw new PathError(
        `A path: ${filePath} with a project scope is provided, but no project is initialized.`
      );
    } else if (!projectContext.isPathWithinProjectArea(filePath)) {
      throw new PathError(
        `Provided path: '${filePath}' doesn't lie in project scope.`
      );
    }
  } else {
    throw new ScopeError("Invalid scope provided.");
  }
}

module.exports = validateScopeBasedAbsoluteFilePath;
