"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const node_os_1 = __importDefault(require("node:os"));
const config_js_1 = require("./config.js");
const handleExternalLink_js_1 = require("./lib/handlers/handleExternalLink.js");
const menu_js_1 = require("./lib/menu.js");
const handleFocus_js_1 = require("./lib/handlers/handleFocus.js");
const singleInstance_js_1 = require("./lib/singleInstance.js");
const logger_js_1 = require("./lib/logger.js");
const handleCrash_js_1 = require("./lib/handlers/handleCrash.js");
const createWindow_js_1 = require("./lib/createWindow.js");
const handleDeeplink_js_1 = require("./lib/handlers/handleDeeplink.js");
const updater_js_1 = require("./lib/updater.js");
const events_js_1 = require("./events.js");
const handleError_js_1 = require("./lib/handlers/handleError.js");
const customTitleBar_js_1 = require("./lib/customTitleBar.js");
const platform_js_1 = require("./constants/platform.js");
const handleMetrikaRequests_js_1 = require("./lib/handlers/handleMetrikaRequests.js");
(0, handleError_js_1.handleUncaughtException)();
(0, singleInstance_js_1.checkForSingleInstance)();
(0, handleDeeplink_js_1.handleDeeplinkOnApplicationStartup)();
(async () => {
    await electron_1.app.whenReady();
    (0, menu_js_1.setupMenu)();
    const window = await (0, createWindow_js_1.createWindow)();
    (0, events_js_1.handleApplicationEvents)(window);
    (0, handleExternalLink_js_1.handleExternalLink)(window);
    (0, logger_js_1.logWindowLifecycle)(window);
    (0, handleDeeplink_js_1.handleDeeplink)(window);
    (0, handleMetrikaRequests_js_1.handleMetrikaRequests)(window);
    (0, handleCrash_js_1.handleCrash)();
    (0, handleFocus_js_1.handleFocus)();
    if (node_os_1.default.platform() === platform_js_1.Platform.WINDOWS) {
        (0, customTitleBar_js_1.createCustomTitleBar)(window);
    }
    if (config_js_1.config.enableAutoUpdate) {
        updater_js_1.updater.start();
        updater_js_1.updater.onUpdate((version) => {
            (0, events_js_1.sendUpdateAvailable)(window, version);
        });
    }
})();
electron_1.app.on('window-all-closed', () => {
    electron_1.app.quit();
});
