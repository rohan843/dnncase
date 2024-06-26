// To check for circular dependencies: npx depcruise native

const { app, BrowserWindow, ipcMain } = require("electron");
const {
  systemStartupSequence,
} = require("./systemStartup/systemStartupSequence");
const { getCodeFrom } = require("./CodeExporterAPI/code_generator");
const path = require("path");
const saveFile = require("./saveFile");

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
  win.loadURL("https://dnncase.netlify.app/");
  return win;
};

function data_to_renderer_process() {
  console.log("Window minimized");
  return "asdf";
}
app.whenReady().then(() => {
  // const currentProjectPath = systemStartupSequence();
  // console.log(currentProjectPath);
  const win = createWindow();
  ipcMain.handle("alerting", data_to_renderer_process);
  ipcMain.on("minimize-window", () => {
    win.minimize();
  });

  ipcMain.on("maximize-window", () => {
    if (!win.isMaximized()) {
      win.maximize();
    } else {
      win.unmaximize();
    }
  });

  ipcMain.on("close-window", () => {
    win.close();
  });

  ipcMain.on("generate-code", (_event, graphData) => {
    const code = getCodeFrom(graphData);
    saveFile(code, "dnn_code.py");
  });
});
