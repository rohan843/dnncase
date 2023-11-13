const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
//   send: (channel, data) => ipcRenderer.send(channel, data),
//   recieve: (channel, func) =>
//     ipcRenderer.on(channel, (event, ...args) => func(args)),
  closeWindow: () => ipcRenderer.send("close-window"),
});
