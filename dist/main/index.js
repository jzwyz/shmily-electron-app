"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
function createWindow() {
    // 创建浏览器窗口
    let win = new electron_1.BrowserWindow({
        width: 400,
        height: 700,
        maxWidth: 600,
        minWidth: 400,
        maxHeight: 1200,
        minHeight: 700,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    // 通过url方式加载页面
    win.loadURL('https://shop.hongdan310.com/');
}
/**
 * 初始化成功之后,加载视图
 */
electron_1.app.whenReady().then(createWindow);
/**
 * 窗口关闭时,结束进程
 */
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=index.js.map