const { app, BrowserWindow } = require("electron");
const {
  systemStartupSequence,
} = require("./systemStartup/systemStartupSequence");

// eslint-disable-next-line no-unused-vars
const createWindow = () => {
  const win = new BrowserWindow({ frame: false });
  win.maximize();
  // TODO: Analyse this for its implications on security.
  win.webContents.session.enableNetworkEmulation({ offline: true });
  win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  // createWindow();
  const currentProjectPath = systemStartupSequence();
  console.log(currentProjectPath);
});
