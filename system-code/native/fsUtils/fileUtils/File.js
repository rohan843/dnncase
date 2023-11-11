const RelativePathError = require("../../errors/RelativePathError");
const path = require("path");

/**
 * The File class. Objects of this class represent a file on the user's system.
 */
class File {
  constructor(filePath, fileScope) {
    if (!path.isAbsolute(filePath)) {
      throw RelativePathError(
        `The path: ${filePath} is relative. Scope-based path resolution is currently disabled. Please provide full path.`
      );
    }
    this.filePath = filePath;
  }
}

module.exports = File;
