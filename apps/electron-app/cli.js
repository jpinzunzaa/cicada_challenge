const { app, BrowserWindow, session } = require('electron');
const path = require('path');

const args = process.argv.slice(2);
const url = args[0]; // Primer argumento de la terminal (URL del archivo)
const filename = args[1] || 'downloaded-file'; // Segundo argumento opcional (nombre del archivo)

if (!url) {
  console.error('❌ Error: Debes proporcionar una URL para descargar.');
  process.exit(1);
}

let win;

app.on('ready', async () => {
  win = new BrowserWindow({
    show: false, // No mostrar la ventana
    webPreferences: { nodeIntegration: false }
  });

  const savePath = path.join(app.getPath('downloads'), filename);

  console.log(`⬇️ Iniciando descarga desde: ${url}`);
  win.webContents.downloadURL(url);

  session.defaultSession.on('will-download', (event, item) => {
    item.setSavePath(savePath);

    item.on('updated', (event, state) => {
      if (state === 'progressing') {
        if (!item.isPaused()) {
          console.log(`📥 Descargando: ${item.getReceivedBytes()} de ${item.getTotalBytes()} bytes`);
        }
      }
    });

    item.once('done', (event, state) => {
      if (state === 'completed') {
        console.log(`✅ Descarga completa: ${savePath}`);
      } else {
        console.error(`❌ Descarga fallida: ${state}`);
      }
      app.quit();
    });
  });
});
