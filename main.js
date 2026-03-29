// Import the Electron module
   const { app, BrowserWindow } = require('electron');

   let mainWindow;

   // Function to create the main window
   function createMainWindow() {
     // Create a new browser window

    // const mainWindow = new BrowserWindow();
    mainWindow=new BrowserWindow({
        width:800,
        height:600
    });

     // Load an HTML file into the window
     mainWindow.loadFile('index.html');
   }


    function showBlinkPopup(){
        const popup=new BrowserWindow({
            width:100,
            height:1000,
            frame:false,
            alwaysOnTop:true
        });
        popup.loadFile('popup.html');
        setTimeout(()=>{
            popup.close()
        },2000);
    }









   // Event handler for when Electron has finished initialization
   app.whenReady().then(()=>{

    createMainWindow
   setInterval(showBlinkPopup,5000);
});
