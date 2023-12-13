"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFocus = void 0;
const electron_1 = require("electron");
const electron_log_1 = __importDefault(require("electron-log"));
const focusLogger = electron_log_1.default.scope('Focus');
const handleFocus = () => {
    electron_1.app.on('activate', () => {
        const [window] = electron_1.BrowserWindow.getAllWindows();
        if (window) {
            focusLogger.log('Window focused');
            window.show();
        }
    });
};
exports.handleFocus = handleFocus;
