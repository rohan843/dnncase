//const {ipcRenderer} = require("electron")
//import ipcRenderer from Electron
import {ipcRenderer} from "electron";
export function minimize() {
    ipcRenderer.send("minimize","Window minimized");
}

export function maximized() {
    ipcRenderer.send("maximized","Window maximized");
}

export function windowClosed() {
    ipcRenderer.send("closed","Window Closed");
}


