const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  closeWindow: () => ipcRenderer.send("close-window"),
  minimizeWindow: () => ipcRenderer.send("minimize-window"),
  maximizeWindow: () => ipcRenderer.send("maximize-window"),
  dataRecieved: () => ipcRenderer.invoke("alerting"),
  exportCode: (graphData) => ipcRenderer.send("generate-code", graphData),
});
