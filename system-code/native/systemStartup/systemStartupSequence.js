/**
 * This is the startup sequence. This function will be called once when the 'ready' event is fired. The basic tasks this function does are:
 * 
 * 1. Check if a last accessed project folder path exists in app data.
 * 2. If it exists, that path is set as the current project's path. Else, `null` is set as the current path.
 * 
 * @returns {(string | null)} The path to last accessed project folder.
 * 
 */
function systemStartupSequence() {
    console.log('system startup');
}

module.exports = { systemStartupSequence };
