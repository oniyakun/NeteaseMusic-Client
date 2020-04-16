const {app, BrowserWindow, Menu, Tray, dialog, globalShortcut, shell} = require('electron')
const ipc = require('electron').ipcMain
const fs = require("fs")
const path = require("path")
const client = require('discord-rich-presence')('546571212390662205')

function createWindow () {     
    // 创建浏览器窗口
    win = new BrowserWindow({
      width: 1280,
      height: 800,
      webPreferences: {
        nodeIntegration: true
      },
      frame: false,
    })
  
    // 加载index.html文件
    win.loadFile('index.html')
    
    //开发者工具
    //win.webContents.openDevTools()
    
    //监听最小化事件
    ipc.on('hide', e => win.minimize())

    ipc.on('name', (event, arg) => {
      discord(arg[0], arg[1])
    })

    //监听Github按钮事件
    ipc.on('gogithub', e => shell.openExternal("https://github.com/oniyakun/NeteaseMusic-Client"))
}
  //设置托盘
  let TrayMenu = [
    {
        label: "显示/隐藏窗口",
        click: function () {
            togglewindow()
        }
    },
    {
        label: "播放/暂停（Ctrl+空格）",
        click: function () {
          togglePlaying()
        }
    },
    {
        label: "上一首（Ctrl+左方向）",
        click: function () {
          prev()
        }
    },
    {
        label: "下一首（Ctrl+右方向）",
        click: function () {
          next()
        }
    },
    {
        label: "退出",
        click: function () {
          app.quit()
        }
    }
  ]
  
  let tray = undefined
  
  function createTray() {
    tray = new Tray(path.join(__dirname, "img/tray.png"))

    const contextMenu = Menu.buildFromTemplate(TrayMenu)
    tray.setToolTip('网易云音乐')
    tray.setContextMenu(contextMenu)
    tray.on('click', function(e){togglewindow()})
  }

  async function togglewindow() {
    win.isVisible() ? win.hide() : win.show()
  }

  function discord(title, artists){
    client.updatePresence({
      state: 'By: ' + artists,
      details: 'Listening: ' + title,
      largeImageKey: 'neteaselogo_512x512',
    });
  }
  //托盘功能
  function changeMenuText() {
    win.on("show", () => {
      TrayMenu[0].label = "隐藏窗口"
      tray.setContextMenu(Menu.buildFromTemplate(TrayMenu))
    })

    win.on("hide", () => {
      TrayMenu[0].label = "显示窗口"
      tray.setContextMenu(Menu.buildFromTemplate(TrayMenu))
    })
  }

  function togglePlaying() {
    win.webContents.send('toggleplay')
  }

  function prev() {
    win.webContents.send('prev')
  }

  function next() {
    win.webContents.send('next')
  }
  
  //创建窗口
  app.on("ready", () => {
    createWindow()
    createTray()
    changeMenuText()

    //创建快捷键
    globalShortcut.register('Control+Left', prev)
    globalShortcut.register('Control+Right', next)
    globalShortcut.register('Control+Space', togglePlaying)
    //禁止刷新
    globalShortcut.register("CommandOrControl+R", () => { return undefined })
    globalShortcut.register("F5", () => { return undefined })
  })