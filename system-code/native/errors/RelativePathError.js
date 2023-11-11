class RelativePathError extends Error {
  constructor(message) {
    super(message);
    this.name = "RelativePathError";
    this.cause =
      "Relative paths are only supported for user inputs, where they must be converted to absolute paths w.r.t. project root.";
  }
}

module.exports = RelativePathError;
