const path = require("node:path");
const fs = require("fs");
const { app } = require("electron");
const { appName } = require("../constants");

/**
 * A class to allow easy management of global storage area of the system.
 */
class GlobalAppData {
  constructor() {
    this.appDataDir = path.join(app.getPath("appData"), appName);
  }
  /**
   * Synchronously checks if the global data directory exists.
   * @returns {boolean} `true` if global directory exists, else `false`;
   */
  isDirectoryInitiated() {
    return fs.existsSync(this.appDataDir);
  }
  /**
   * Initiates the global directory if it already doesn't exist.
   * @returns {boolean} `true` if directory was initiated, else `false`.
   */
  initiateDirectory() {
    const directoryAlreadyPresent = fs.existsSync(this.appDataDir);
    if (!directoryAlreadyPresent) {
      fs.mkdirSync(this.appDataDir);
      return true;
    } else {
      return false;
    }
  }
  /**
   * Initiates the contents of the global directory. The global directory must be initiated beforehand.
   */
  initiateDirectoryContents() {
    const topLevelSubdirs = ["/cache"];
    for (let topLevelSubdir of topLevelSubdirs) {
      const fullSubdirPath = path.join(this.appDataDir, topLevelSubdir);
      if (!fs.existsSync(fullSubdirPath)) {
        console.log("Initializing", topLevelSubdir);
        fs.mkdirSync(fullSubdirPath, { recursive: true });
      }
    }
  }
  get getDirPath() {
    return this.appDataDir;
  }
}

/**
 * An instantiated object allowing access to the app's global data directory.
 * @global
 */
const globalAppData = new GlobalAppData();

module.exports = { globalAppData };
