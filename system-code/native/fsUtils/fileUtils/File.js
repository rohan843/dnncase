const validateScopeBasedAbsoluteFilePath = require("../utils/validateScopeBasedAbsoluteFilePath");

/**
 * The File class. Objects of this class represent a file on the user's system.
 */
class File {
  constructor(filePath, fileScope) {
    validateScopeBasedAbsoluteFilePath(filePath, fileScope);
    this.filePath = filePath;
  }
}

module.exports = File;
