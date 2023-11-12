const RelativePathError = require("../../errors/RelativePathError");
const PathError = require("../../errors/PathError");
const path = require("path");
const fs = require("fs");

// TODO: Add a check if the path doesn't exist, then any prefix of the path must not be a file.

/**
 * A function that checks if a provided path is absolute and can be used as a path to a file. Throws an error on any validation issues.
 * @param {string} filePath The path to validate.
 *
 * @throws PathError -> RelativePathError
 * @throws ScopeError -> UnboundedScopeError
 */
function validateNonScopeBasedAbsoluteFilePath(filePath) {
  if (!filePath) {
    throw new PathError("No path provided.");
  } else if (!path.isAbsolute(filePath)) {
    throw new RelativePathError(
      `The path: '${filePath}' is relative. Scope-based path resolution is currently disabled. Please provide full path.`
    );
  } else if (fs.existsSync(filePath) && fs.lstatSync(filePath).isDirectory()) {
    throw new PathError(
      `Provided path: '${filePath}' to File exists and is a directory.`
    );
  }
}

module.exports = validateNonScopeBasedAbsoluteFilePath;
