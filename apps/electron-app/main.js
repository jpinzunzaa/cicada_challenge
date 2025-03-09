const { app, BrowserWindow, ipc_main } = require('electron');
const path = require('path');
const axios = require('axios');

let main_window;

const create_window = () => {
  main_window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  main_window.loadURL('http://localhost:3000');

  main_window.on('closed', () => {
    main_window = null;
  });
}

app.whenReady().then(create_window);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    create_window();
  }
});

ipc_main.handle('fetch-data', async (_, url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
});
