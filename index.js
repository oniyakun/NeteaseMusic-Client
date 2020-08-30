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
      backgroundColor: '#00000000',
      webPreferences: {
        nodeIntegration: true
      },
      frame: false,
    })
  
    // 加载index.html文件
    win.loadFile('index.html')
    
    // 开发者工具
    // win.webContents.openDevTools()

    // 监听最小化事件
    ipc.on('hide', e => win.minimize())

    // discord监听
    ipc.on('name', (event, arg) => {
      discord(arg[0], arg[1])
    })

    // 监听Github按钮事件
    ipc.on('gogithub', e => shell.openExternal("https://github.com/oniyakun/NeteaseMusic-Client"))
    // 监听登录链接按钮事件
    ipc.on('openLink', e => shell.openExternal("https://music.163.com"))

    // 监听拖拽和缩放事件
    win.on("move", () => {
      disableAcrylic();
      enableAcrylic();
    });

    win.on("resize", () => {
      disableAcrylic();
      enableAcrylic();
    })

    win.on("blur", () => {
      disableAcrylic();
    })

    win.on("focus", () => {
      enableAcrylic();
    })
}
  // 设置托盘
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
          discord_tray()
        }
    },
    {
        label: "下一首（Ctrl+右方向）",
        click: function () {
          next()
          discord_tray()
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

  // Discord rich Presence
  function discord(title, artists){
    client.updatePresence({
      state: 'By: ' + artists,
      details: 'Listening: ' + title,
      largeImageKey: 'neteaselogo_512x512',
      largeImageText: 'By Oniyakun',
    });
  }

  // 托盘功能
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

  function discord_tray() {
    win.webContents.send('discord_tray')
  }

// 防拖拽延迟
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// 定义关闭和开启毛玻璃的方法
  const disableAcrylic = debounce(
    () => {
      console.log('cuz of macos, it didint turns on')
    },
    50,
    true
  );

  const enableAcrylic = debounce(() => {
    
  }, 50);
  
  // 创建窗口
  app.on("ready", () => {
    createWindow()
    createTray()
    changeMenuText()

    // 创建快捷键
    globalShortcut.register('Control+Left', prev)
    globalShortcut.register('Control+Right', next)
    globalShortcut.register('Control+Space', togglePlaying)
  })