const path = require("node:path");
const fs = require("fs");
const { app } = require("electron");
const { appName, cachedPrevSessionConfigName } = require("./constants");
const { UnscopedJSONFile, checkIfChildPathIsValid } = require("./fsAPI");

/**
 * A class to allow easy management of global storage area of the system.
 */
class GlobalAppData {
  constructor() {
    // Objects of this class are a source of truth for this path.
    this.__appDataDir = path.join(app.getPath("appData"), appName);
    this.__isInitiated = false;
    this.__areContentsInitiated = false;
  }

  // Initiation Related Methods

  /**
   * Initiates the global directory if it doesn't already exist. If this method returns `false`,
   * and the `isDirectoryInitiated` getter also returns false, this means that the directory
   * previously didn't exist, and during its creation some error occurred.
   *
   * **NOTE**: The contents of the global directory are not initiated by calling this method. Use
   * the `initiateDirectoryContents` method for that purpose, after calling this method.
   * @returns {boolean} `true` if directory was created, else `false`.
   */
  initiateDirectory() {
    const directoryAlreadyPresent = fs.existsSync(this.__appDataDir);
    if (!directoryAlreadyPresent) {
      try {
        fs.mkdirSync(this.__appDataDir);
        this.__isInitiated = true;
        return true;
      } catch (e) {
        this.__isInitiated = false;
        return false;
      }
    } else {
      this.__isInitiated = true;
      return false;
    }
  }
  /**
   * Checks if the global directory is initiated.
   * @returns {boolean} `true` if global directory exists, else `false`;
   */
  get isDirectoryInitiated() {
    return this.__isInitiated;
  }
  /**
   * Initiates the contents of the global directory. The global directory must be initiated
   * beforehand.
   */
  initiateDirectoryContents() {
    this.__initiateCache();
    this.__areContentsInitiated = true;
  }
  get areDirectoryContentsInitiated() {
    return this.__areContentsInitiated;
  }
  /**
   * Initiates the contents of the global cache.
   * @private This method is private
   */
  __initiateCache() {
    // Creating cache folder.
    const pathToCache = path.join(this.__appDataDir, "/cache");
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
    const prevSessionFile = new UnscopedJSONFile(pathToPrevSessionConfig);
    prevSessionFile.buildSync({});

    process.stdout.write("DONE\n");
  }

  // Global Scope and Path Related Methods

  get getDirPath() {
    return this.__appDataDir;
  }
  /**
   * Takes a path string and checks if it lies in the global directory.
   * @param {string} queryPath Must be an absolute path. This is **NOT** validated within this method.
   * @returns {boolean} `true` if path lies in global area, else `false`.
   */
  isPathWithinGlobalArea(queryPath) {
    return checkIfChildPathIsValid({
      child: queryPath,
      parent: this.__appDataDir,
    });
  }
}

/**
 * An instantiated object allowing access to the app's global data directory.
 * @global
 * @satisfies This object is the **ONLY** source of truth for the absolute path to the global
 * directory.
 */
const globalAppData = new GlobalAppData();

module.exports = { globalAppData };
