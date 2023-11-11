const RelativePathError = require("../../errors/RelativePathError");
const PathError = require("../../errors/PathError");
const UnboundedScopeError = require("../../errors/UnboundedScopeError");
const ScopeError = require("../../errors/ScopeError");
const path = require("path");
const { Scope } = require("../../constants");
const fs = require("fs");
const { globalAppData } = require("../GlobalAppData");

/**
 * The File class. Objects of this class represent a file on the user's system.
 */
class File {
  constructor(filePath, fileScope) {
    if (!path.isAbsolute(filePath)) {
      throw RelativePathError(
        `The path: '${filePath}' is relative. Scope-based path resolution is currently disabled. Please provide full path.`
      );
    } else if (fileScope === Scope.unbounded) {
      throw UnboundedScopeError(
        "Unbounded scope provided to File. Only `project` or `global` scopes may be provided."
      );
    } else if (
      fs.existsSync(filePath) &&
      fs.lstatSync(filePath).isDirectory()
    ) {
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
    } else {
      throw ScopeError("Invalid scope provided.");
    }
    this.filePath = filePath;
  }
}

module.exports = File;
