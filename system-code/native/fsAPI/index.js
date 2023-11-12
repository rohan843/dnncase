const UnscopedFile = require("./fileAPI/UnscopedFile");
const UnscopedJSONFile = require("./fileAPI/UnscopedJSONFile");
const GlobalScopedFile = require("./fileAPI/GlobalScopedFile");
const GlobalScopedJSONFile = require("./fileAPI/GlobalScopedJSONFile");
const ProjectScopedFile = require("./fileAPI/ProjectScopedFile");
const ProjectScopedJSONFile = require("./fileAPI/ProjectScopedJSONFile");
const checkIfChildPathIsValid = require("./pathUtils/checkIfChildPathIsValid");

module.exports = {
  // File API
  UnscopedFile,
  UnscopedJSONFile,
  GlobalScopedFile,
  GlobalScopedJSONFile,
  ProjectScopedFile,
  ProjectScopedJSONFile,

  // Path Utils
  checkIfChildPathIsValid,
};
