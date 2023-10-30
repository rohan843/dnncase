const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow();

  win.maximize();

  win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  createWindow();
});
