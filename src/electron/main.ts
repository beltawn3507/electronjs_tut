import {app,BrowserWindow} from 'electron';
import path from 'path'
import { isDev } from './util.js';
import { pollResources } from './resourceManager.js';

app.on('ready',()=>{
    const mainWindow=new BrowserWindow();
    
    // app.getAppPath will give us the path of the root directory
    if(isDev()){
        mainWindow.loadURL('http://localhost:5123'); 
    }else{
        mainWindow.loadFile(path.join(app.getAppPath() , '/dist-react/index.html'));
    }

    pollResources();
    
    
})
