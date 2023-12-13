"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWindowLifecycle = void 0;
const electron_1 = require("electron");
const electron_log_1 = __importDefault(require("electron-log"));
const config_js_1 = require("../config.js");
const applicationLogger = electron_log_1.default.scope('Application');
applicationLogger.info(`Version: ${electron_1.app.getVersion()}`);
applicationLogger.info(`Build: ${config_js_1.config.buildInfo.VERSION} (${config_js_1.config.buildInfo.BRANCH})`);
function logWindowLifecycle(window) {
    const lifecycleLogger = electron_log_1.default.scope('WindowLifecycle');
    window.on('ready-to-show', () => {
        lifecycleLogger.log('Ready to show');
    });
    window.on('closed', () => {
        lifecycleLogger.log('Closed');
    });
}
exports.logWindowLifecycle = logWindowLifecycle;
