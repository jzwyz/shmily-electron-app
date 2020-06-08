const { app, BrowserWindow } = require('electron');
const path = require('path');


function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 700,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        }
    })

    // 通过url方式加载页面
    const indexPath = path.resolve(__dirname, './build/index.html');
    console.log('-----> windows path:', indexPath);
    win.loadFile(indexPath)
}

/**
 * 初始化成功之后,加载视图
 */
app.whenReady().then(createWindow)

/**
 * 窗口关闭时,结束进程
 */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})