import {app,BrowserWindow} from 'electron';
import path from 'path'

app.on('ready',()=>{
    const mainWindow=new BrowserWindow();
    // app.getAppPath will give us the path of the root directory
    mainWindow.loadFile(path.join(app.getAppPath() , '/dist-react/index.html'));
})