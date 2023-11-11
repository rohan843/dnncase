const path = require("path");

/**
 * A utility function that takes as input 2 **absolute** paths, `child` and `parent` (both strings) and returns `true` iff the child path is a file or sub-directory within the parent path. Will resolve to `true` if both are same paths.
 */
function checkIfChildPathIsValid({ child, parent }) {
  child = path.resolve(child);
  parent = path.resolve(parent);
  return child.startsWith(parent);
}

module.exports = checkIfChildPathIsValid;
