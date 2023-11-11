const path = require("node:path");
const fs = require("fs");
const { app } = require("electron");
const { appName, cachedPrevSessionConfigName } = require("../constants");

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
    this.__initiateCache();
  }
  /**
   * Initiates the contents of the global cache.
   * @private This method is private
   */
  __initiateCache() {
    const pathToCache = path.join(this.appDataDir, "/cache");
    if (!fs.existsSync(pathToCache)) {
      process.stdout.write("Creating /cache... ");
      fs.mkdirSync(pathToCache);
      process.stdout.write("DONE\n");
    }
    process.stdout.write("Creating cache files... ");
    const pathToPrevSessionConfig = path.join(
      pathToCache,
      cachedPrevSessionConfigName
    );
    const prevSessionFD = fs.openSync(pathToPrevSessionConfig, "a");
    fs.closeSync(prevSessionFD);
    process.stdout.write("DONE\n");
  }
  get getDirPath() {
    return this.appDataDir;
  }
  /**
   * Takes a path string and checks if it lies in the global directory.
   * @param {string} queryPath 
   * @returns {boolean} `true` if path lies in global area, else `false`.
   */
  isPathWithinGlobalArea(queryPath) {

  }
}

/**
 * An instantiated object allowing access to the app's global data directory.
 * @global
 */
const globalAppData = new GlobalAppData();

module.exports = { globalAppData };
