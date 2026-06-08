const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('cogfics', {
  minimize:     () => ipcRenderer.send('window-minimize'),
  maximize:     () => ipcRenderer.send('window-maximize'),
  close:        () => ipcRenderer.send('window-close'),
  loadSettings: () => ipcRenderer.invoke('settings-load'),
  saveSettings: (d) => ipcRenderer.invoke('settings-save', d),
  getVersion:   () => ipcRenderer.invoke('app-version')
});
