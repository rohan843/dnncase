const validateScopeBasedAbsoluteFilePath = require("../utils/validateScopeBasedAbsoluteFilePath");
const fs = require("fs");

/**
 * The File class. Objects of this class represent a file on the user's system.
 *
 * **NOTE**: A File object only guarantees the presence of an actual file if either of its build() or buildSync() methods have been called.
 */
class File {
  constructor(filePath, fileScope) {
    validateScopeBasedAbsoluteFilePath(filePath, fileScope);
    /** @private The absolute path to the file. */
    this.__filePath = filePath;
    /** @private Whether file has been built or not. */
    this.__isBuilt = false;
    /** @private The contents of the file. Could be string or of some other data type, such as object. */
    this.__fileData = null;
  }
  /**
   * Checks if the provided path points to an existing file. If not, creates that file.
   */
  buildSync() {
    if (!fs.existsSync(this.__filePath)) {
      fs.closeSync(fs.openSync(this.__filePath, "w"));
    }
    this.__isBuilt = true;
  }
  /**
   * Returns `true` if the current file has been built. Only once a file has been built can we guarantee it exists.
   */
  get hasBeenBuilt() {
    return this.__isBuilt;
  }
}

module.exports = File;
