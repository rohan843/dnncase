/**
 * Takes in a file index and returns its name.
 * @param {string} fileIndex The (properly formatted index of file/directory)
 * @returns {string} The name of the associated file or directory.
 */
export function getNameFromFileIndex(fileIndex) {
  return fileIndex.split("/").slice(-1);
}
