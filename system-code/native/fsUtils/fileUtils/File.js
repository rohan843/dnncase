// TODO: ensure all paths are valid and lie either in global area or in project area

const path = require("path");

/**
 * The File class. Objects of this class represent a file on the user's system.
 */
class File {
  constructor(filePath) {
    this.filePath = filePath;
  }
}

module.exports = File;
