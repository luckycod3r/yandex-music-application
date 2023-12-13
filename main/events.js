"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendUpdateAvailable = exports.handleApplicationEvents = void 0;
const electron_1 = require("electron");
const electron_log_1 = __importDefault(require("electron-log"));
const events_js_1 = require("./constants/events.js");
const updater_js_1 = require("./lib/updater.js");
const cookies_js_1 = require("./constants/cookies.js");
const handleError_js_1 = require("./lib/handlers/handleError.js");
const eventsLogger = electron_log_1.default.scope('Events');
const handleApplicationEvents = (window) => {
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_MINIMIZE, () => {
        eventsLogger.info('Event received', events_js_1.Events.WINDOW_MINIMIZE);
        window.minimize();
    });
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_MAXIMIZE, () => {
        eventsLogger.info('Event received', events_js_1.Events.WINDOW_MAXIMIZE);
        if (window.isMaximized()) {
            window.unmaximize();
        }
        else {
            window.maximize();
        }
    });
    electron_1.ipcMain.on(events_js_1.Events.WINDOW_CLOSE, () => {
        eventsLogger.info('Event received', events_js_1.Events.WINDOW_CLOSE);
        window.close();
    });
    electron_1.ipcMain.on(events_js_1.Events.ON_UPDATE_INSTALL, () => {
        eventsLogger.info('Event received', events_js_1.Events.ON_UPDATE_INSTALL);
        updater_js_1.updater.install();
    });
    electron_1.ipcMain.on(events_js_1.Events.ON_APPLICATION_READY, () => {
        eventsLogger.info('Event received', events_js_1.Events.ON_APPLICATION_READY);
        if (updater_js_1.updater.latestAvailableVersion) {
            (0, exports.sendUpdateAvailable)(window, updater_js_1.updater.latestAvailableVersion);
        }
    });
    electron_1.ipcMain.handle(events_js_1.Events.GET_PASSPORT_LOGIN, async () => {
        eventsLogger.info('Event handle', events_js_1.Events.GET_PASSPORT_LOGIN);
        try {
            const cookie = await electron_1.session.defaultSession.cookies.get({
                name: cookies_js_1.PASSPORT_LOGIN,
                domain: cookies_js_1.PASSPORT_LOGIN_DOMAIN
            });
            return cookie?.[0]?.value;
        }
        catch (error) {
            eventsLogger.error(`${events_js_1.Events.GET_PASSPORT_LOGIN} event failed.`, (0, handleError_js_1.toPlainError)(error));
            return;
        }
    });
};
exports.handleApplicationEvents = handleApplicationEvents;
const sendUpdateAvailable = (window, version) => {
    window.webContents.send(events_js_1.Events.ON_UPDATE_AVAILABLE, version);
    eventsLogger.info('Event sent', events_js_1.Events.ON_UPDATE_AVAILABLE, version);
};
exports.sendUpdateAvailable = sendUpdateAvailable;
