// // preload.js
// // const { ipcRenderer } = require('electron');
// window.ipcRenderer = require('electron').ipcRenderer;

// window.minimize = () => {
//   ipcRenderer.send('minimize', 'Window minimized');
// };

// window.maximized = () => {
//   ipcRenderer.send('maximized', 'Window maximized');
// };

// window.windowClosed = () => {
//   ipcRenderer.send('closed', 'Window Closed');
// };
const { ipcRenderer, contextBridge } = require("electron");
contextBridge.exposeInMainWorld("electronAPI", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  recieve: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(args)),
  closeWindow: () => ipcRenderer.send("close-window", true),
});
