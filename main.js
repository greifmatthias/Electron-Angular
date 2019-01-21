const { app, BrowserWindow } = require('electron');

let _window;

function createWindow () {
  // Create the browser window.
  this._window = new BrowserWindow({
    width: 1200, 
    height: 800,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  });

  // Remove menu
  this._window.setMenu(null);
  
  // Load url
  this._window.loadURL(`file://${__dirname}/dist/project/index.html`);

  // Event when the window is closed.
  this._window.on('closed', function () {
    _window = null;
  });
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // OSX specific close process
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // OSX specific close process
  if (_window === null) {
    createWindow();
  }
});