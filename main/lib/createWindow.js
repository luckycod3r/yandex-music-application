"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWindow = void 0;
const node_path_1 = __importDefault(require("node:path"));
const electron_1 = require("electron");
const loader_js_1 = require("./loader.js");
const safeRedirects_js_1 = require("./safeRedirects.js");
const config_js_1 = require("../config.js");
const loadURL = (0, loader_js_1.loader)({
    protocol: config_js_1.config.appProtocol,
    hostname: config_js_1.config.appHostname,
    buildPath: config_js_1.config.buildPath,
    bypassCSP: config_js_1.config.bypassCSP,
    isCorsEnabled: config_js_1.config.enableWebSecurity
});
const createWindow = async () => {
    const window = new electron_1.BrowserWindow({
        show: false,
        center: true,
        titleBarStyle: 'hidden',
        trafficLightPosition: {
            x: 16,
            y: 10
        },
        minWidth: 1024,
        minHeight: 800,
        width: 1280,
        height: 800,
        webPreferences: {
            devTools: config_js_1.config.enableDevTools,
            webSecurity: config_js_1.config.enableWebSecurity,
            nodeIntegrationInWorker: true,
            nodeIntegration: false,
            contextIsolation: true,
            autoplayPolicy: 'no-user-gesture-required',
            preload: node_path_1.default.join(__dirname, 'preload.js')
        }
    });
    (0, safeRedirects_js_1.safeRedirects)(window);
    window.once('ready-to-show', () => {
        window.show();
    });
    await loadURL(window);
    return window;
};
exports.createWindow = createWindow;
