const { app, dialog } = require("electron");
const fs = require("fs");

function saveFile(content, fileName) {
  // Show save dialog
  dialog.showSaveDialog(
    {
      defaultPath: app.getPath("downloads") + `/${fileName}`,
      filters: [
        { name: "All Files", extensions: ["*"] },
      ],
    },
    (filePath) => {
      // If the user didn't cancel the dialog
      if (filePath) {
        // Write content to the selected file
        fs.writeFile(filePath, content, (err) => {
          if (err) {
            console.error("Error saving file:", err);
          } else {
            console.log("File saved successfully!");
          }
        });
      }
    }
  );
}

module.exports = saveFile;
