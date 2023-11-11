/**
 * The File class. Objects of this class represent a file on the user's system.
 * @abstract This is an abstract base class for files.
 */
class File {
  constructor(filePath) {
    this.filePath = filePath;
  }
}

module.exports = File;