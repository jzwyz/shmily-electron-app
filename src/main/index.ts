import { app, BrowserWindow } from 'electron';

function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 400,
        height: 700,
        maxWidth: 600,
        minWidth: 400,
        maxHeight: 1200,
        minHeight: 700,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    // 通过url方式加载页面
    win.loadURL('https://shop.hongdan310.com/')
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