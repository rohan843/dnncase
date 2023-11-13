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
    },
  });
  win.maximize();
  // TODO: Analyse this for its implications on security.
  win.webContents.session.enableNetworkEmulation({ offline: true });
  win.loadURL("http://localhost:3000");
  return win;
};

app.whenReady().then(() => {
  // const currentProjectPath = systemStartupSequence();
  // console.log(currentProjectPath);
  const win = createWindow();

  ipcMain.on("minimize", (event, data) => {
    console.log(data);
    win.minimize();
  });

  ipcMain.on("maximize", (event, data) => {
    console.log(data);
    win.maximize();
  });

  ipcMain.on("close-window", () => {
    win.close();
  });
});
