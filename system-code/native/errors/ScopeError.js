class ScopeError extends Error {
  constructor(message) {
    super(message);
    this.name = "ScopeError";
  }
}

module.exports = ScopeError;
