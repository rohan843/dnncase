const ScopeError = require("./ScopeError");

class UnboundedScopeError extends ScopeError {
  constructor(message) {
    super(message);
    this.name = "UnboundedScopeError";
    this.cause =
      "This error is typically thrown where the scope for a path is unbounded (i.e., the path can point to anywhere in the filesystem) but the object the path is provided to doesn't ensure safety.";
  }
}

module.exports = UnboundedScopeError;
