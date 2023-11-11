const path = require("node:path");
const fs = require("fs");
const { app } = require("electron");
const { appName, cachedPrevSessionConfigName, Scope } = require("../constants");
const checkIfChildPathIsValid = require("./utils/checkIfChildPathIsValid");
const UnsafeJSONFile = require("./fileUtils/unsafeAPIs/UnsafeJSONFile");

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
    // Creating cache folder.
    const pathToCache = path.join(this.appDataDir, "/cache");
    if (!fs.existsSync(pathToCache)) {
      process.stdout.write("Creating /cache... ");
      fs.mkdirSync(pathToCache);
      process.stdout.write("DONE\n");
    }

    // Creating basic cached files.
    process.stdout.write("Creating cache files... ");

    // 1. Creating cached-prev-session-config.json
    const pathToPrevSessionConfig = path.join(
      pathToCache,
      cachedPrevSessionConfigName
    );
    const prevSessionFile = new UnsafeJSONFile(pathToPrevSessionConfig, Scope.global);
    prevSessionFile.buildSync({});

    process.stdout.write("DONE\n");
  }
  get getDirPath() {
    return this.appDataDir;
  }
  /**
   * Takes a path string and checks if it lies in the global directory.
   * @param {string} queryPath Must be an absolute path. This is **NOT** validated within this method.
   * @returns {boolean} `true` if path lies in global area, else `false`.
   */
  isPathWithinGlobalArea(queryPath) {
    return checkIfChildPathIsValid({
      child: queryPath,
      parent: this.appDataDir,
    });
  }
}

/**
 * An instantiated object allowing access to the app's global data directory.
 * @global
 * @satisfies This object is the **ONLY** source of truth for the absolute path to the global directory.
 */
const globalAppData = new GlobalAppData();

module.exports = { globalAppData };
