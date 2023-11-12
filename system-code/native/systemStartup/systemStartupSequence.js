const globalAppData = require("../GlobalAppData");

/**
 * This is the startup sequence. This function will be called once when the 'ready' event is fired. 
 * The basic tasks this function does are:
 *
 * 1. Check if a last accessed project folder path exists in app data.
 * 2. If it exists, that path is set as the current project's path. Else, `null` is set as the 
 * current path.
 *
 * @returns {(string | null)} The path to last accessed project folder.
 *
 */
function systemStartupSequence() {
  console.log("Initiating system startup...");
  console.log(`Global Data Directory: ${globalAppData.getDirPath}`);
  console.log("Checking and initializing global directory if needed...");
  const wasGlobalDirInitialized = globalAppData.initiateDirectory();
  if (wasGlobalDirInitialized) {
    console.log("Global Directory initialized.");
  }
  console.log("Initiating uninitialized Global Directory contents...");
  globalAppData.initiateDirectoryContents();
}

module.exports = { systemStartupSequence };
