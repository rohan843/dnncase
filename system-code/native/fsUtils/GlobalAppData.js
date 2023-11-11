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
  get getDirPath() {
    return this.appDataDir;
  }
}

const globalAppData = new GlobalAppData();

module.exports = { globalAppData };
