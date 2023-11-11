const File = require("./File");
const _ = require("lodash");
const fs = require("fs");

class JSONFile extends File {
  /**
   * Checks if the provided path points to an existing file. If not, creates that file.
   * @param {(Object | null)} reinitializeIfInvalidSyntax If an object-like, the file contents are parsed and if invalid JSON is found, the whole file is reinitialized to the object provided.
   */
  syncBuild(reinitializerObjectIfInvalidSyntax = null) {
    if (!fs.existsSync(this.filePath)) {
        fs.closeSync(fs.openSync(this.filePath, 'w'));
    }
    if(_.isObjectLike(reinitializerObjectIfInvalidSyntax)) {
        const fileData = fs.readFileSync(this.filePath);
    }
  }
}

module.exports = JSONFile;
