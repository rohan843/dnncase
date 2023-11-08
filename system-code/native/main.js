const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({ frame: false });
  win.maximize();
  win.webContents.session.enableNetworkEmulation({ offline: true });
  win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  createWindow();
});
