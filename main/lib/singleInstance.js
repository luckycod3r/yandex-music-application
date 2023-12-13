"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForSingleInstance = void 0;
const electron_1 = require("electron");
const electron_log_1 = __importDefault(require("electron-log"));
const singleInstanceLogger = electron_log_1.default.scope('SingleInstance');
const isFirstInstance = electron_1.app.requestSingleInstanceLock();
const checkForSingleInstance = () => {
    singleInstanceLogger.info('Single instance');
    if (isFirstInstance) {
        electron_1.app.on('second-instance', () => {
            const [window] = electron_1.BrowserWindow.getAllWindows();
            if (window) {
                if (window.isMinimized()) {
                    window.restore();
                    singleInstanceLogger.log('Restore window');
                }
                window.show();
                singleInstanceLogger.log('Show window');
            }
        });
    }
    else {
        electron_1.app.quit();
    }
};
exports.checkForSingleInstance = checkForSingleInstance;
