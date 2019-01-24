/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__electron__ = __webpack_require__(2);
/*
 * Electron bootstraping
 */



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dev_extensions__ = __webpack_require__(5);




var indexUrl = __WEBPACK_IMPORTED_MODULE_2_url___default.a.format({
    pathname: __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
});
var splashUrl = __WEBPACK_IMPORTED_MODULE_2_url___default.a.format({
    pathname: __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, 'splash.html'),
    protocol: 'file:',
    slashes: true
});
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var win;
var splash;
function createWindow() {
    // Create the browser window.
    win = new __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"]({
        width: 900,
        height: 700,
        minWidth: 500,
        minHeight: 500,
        frame: true,
        titleBarStyle: 'hidden',
        title: "My Name Jeff",
        show: false
    });
    // win.maximize()
    // SPLASH
    splash = new __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"]({
        width: 400,
        height: 550,
        transparent: false,
        frame: false,
        alwaysOnTop: true
    });
    // load splash URL
    splash.loadURL(splashUrl);
    // and load the index.html of the app.
    win.loadURL(indexUrl);
    // // Open the DevTools.
    // if (DEV_SERVER) {
    //   win.webContents.openDevTools();
    // }
    // win.once('ready-to-show', () => {
    //   splash.destroy();
    //   win.show();
    // });
    setTimeout(function () {
        splash.destroy();
        win.show();
    }, 3000);
    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on('ready', createWindow);
// Quit when all windows are closed.
__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        __WEBPACK_IMPORTED_MODULE_0_electron__["app"].quit();
    }
});
__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
__WEBPACK_IMPORTED_MODULE_0_electron__["ipcMain"].on('show-dialog', function (event, arg) {
    __WEBPACK_IMPORTED_MODULE_0_electron__["dialog"].showMessageBox(win, {
        type: 'info',
        buttons: ['OK'],
        title: 'Native Dialog',
        message: 'I\'m a native dialog!',
        detail: 'It\'s my pleasure to make your life better.'
    });
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/*
 * Install DevTool extensions when Electron is in development mode
 */

if ("development" === 'development' && !process.env.CI) {
    var installExtension_1 = __webpack_require__(6).default;
    var extensions_1 = [
        { name: 'Redux DevTools', id: 'lmhkpmbekcpmknklioeibfkpmmfibljd' },
    ];
    __WEBPACK_IMPORTED_MODULE_0_electron__["app"].once('ready', function () {
        var userDataPath = __WEBPACK_IMPORTED_MODULE_0_electron__["app"].getPath('userData');
        extensions_1.forEach(function (ext) {
            installExtension_1(ext.id).then(function () {
                console.log(ext.name + ' installed in ' + userDataPath);
            }).catch(function (err) {
                console.error('Failed to install ' + ext.name, err);
            });
        });
        __webpack_require__(7).install();
    });
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("electron-devtools-installer");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("devtron");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map