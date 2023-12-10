class PathError extends Error {
  constructor(message) {
    super(message);
    this.name = "PathError";
  }
}

module.exports = PathError;
