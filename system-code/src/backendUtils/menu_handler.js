export async function windowMinimize() {
    window.electronAPI.minimizeWindow();
    alert(await window.electronAPI.dataRecieved());
}

export function windowMaximize() {
    window.electronAPI.maximizeWindow();
}

export function windowClosed() {
    window.electronAPI.closeWindow();
}




