// To check for circular dependencies: npx depcruise native

const { app, BrowserWindow, ipcMain } = require("electron");
const {
  systemStartupSequence,
} = require("./systemStartup/systemStartupSequence");
const path = require("path");

// eslint-disable-next-line no-unused-vars
const createWindow = () => {
  const win = new BrowserWindow({
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "../src/backendUtils/preload.js"),
      nodeIntegration: true,
    },
  });
  win.maximize();
  // TODO: Analyse this for its implications on security.
  win.webContents.session.enableNetworkEmulation({ offline: true });
  win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  // const currentProjectPath = systemStartupSequence();
  // console.log(currentProjectPath);
  createWindow();

  ipcMain.on("minimize", (event, data) => {
    console.log(data);
    window.minimize();
  });

  ipcMain.on("maximize", (event, data) => {
    console.log(data);
    window.maximize();
  });

  ipcMain.on("close-window", (event, data) => {
    console.log(data);
    window.close();
  });
});
