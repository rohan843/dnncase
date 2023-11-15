class JSONDelta {
  /**
   * @param {string} fileIndex
   * @param {string[]} pathInFileTree
   * @param {any} prevVal
   * @param {any} newVal
   * @param {Date} timestamp
   */
  constructor(fileIndex, pathInFileTree, prevVal, newVal, timestamp) {
    this.fileIndex = fileIndex;
    this.pathInFileTree = pathInFileTree;
    this.prevVal = prevVal;
    this.newVal = newVal;
    this.timestamp = timestamp;
  }
}
