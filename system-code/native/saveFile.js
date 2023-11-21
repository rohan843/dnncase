const { app, dialog } = require("electron");
const fs = require("fs");
const path = require("path");

function saveFile(content, fileName) {
  // Show save dialog
  dialog
    .showSaveDialog({
      defaultPath: path.join(app.getPath("downloads"), fileName),
    })
    .then(({ filePath }) => {
      if (filePath) {
        fs.writeFileSync(filePath, content);
      }
    });
}

module.exports = saveFile;
