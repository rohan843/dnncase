const JSONDelta = require("../deltaAPI/JSONDelta");

class JSONUndoRedoArchiver {
  /**
   * Returns a delta which when applied to a file takes it to a previous state.
   *
   * @returns {JSONDelta|null}
   */
  getDeltaForPreviousState() {}
  /**
   * Returns a delta which when applied to a file takes it to the next state.
   *
   * @returns {JSONDelta|null}
   */
  getDeltaForNextState() {}
  /**
   * Places a new delta in the archiver.
   *
   * @param {JSONDelta} newDelta
   */
  registerNewDelta(newDelta) {}
}

module.exports = JSONUndoRedoArchiver;
