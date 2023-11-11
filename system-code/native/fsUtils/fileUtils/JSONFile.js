const File = require("./File");
const _ = require("lodash");
const fs = require("fs");

class JSONFile extends File {
  /**
   * Checks if the provided path points to an existing file. If not, creates that file.
   * @param {(Object | null)} reinitializeIfInvalidSyntax If an object-like, the file contents are parsed and if invalid JSON is found, the whole file is reinitialized to the object provided.
   */
  buildSync(reinitializerObjectIfInvalidSyntax = null) {
    super.buildSync();
    if (_.isObjectLike(reinitializerObjectIfInvalidSyntax)) {
      this.__fileData = fs.readFileSync(this.__filePath, "utf8");
      let parsedResult = null;
      let wrongSyntax = false;
      // Validating JSON non-primitive syntax
      try {
        parsedResult = JSON.parse(this.__fileData);
      } catch (e) {
        wrongSyntax = true;
      }
      if (_.isObjectLike(parsedResult)) {
        wrongSyntax = true;
      }
      if (wrongSyntax) {
        this.__fileData = JSON.stringify(reinitializerObjectIfInvalidSyntax);
        this.saveSync();
      }
    }
  }
  /**
   * Writes the content of the file in-memory to the file in disk.
   */
  saveSync() {
    if (_.isObjectLike(this.__fileData)) {
      fs.writeFileSync(this.__filePath, JSON.stringify(this.__fileData));
    } else {
      fs.writeFileSync(this.__filePath, this.__fileData);
    }
  }
}

module.exports = JSONFile;
