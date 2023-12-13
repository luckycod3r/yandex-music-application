"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeeplink = exports.handleDeeplinkOnApplicationStartup = exports.navigateToDeeplink = void 0;
const electron_1 = require("electron");
const electron_log_1 = __importDefault(require("electron-log"));
const config_js_1 = require("../../config.js");
let deeplinkUrl = null;
const deeplinkLogger = electron_log_1.default.scope('Deeplink');
const transformUrlToInternal = (url) => {
    return url.replace(`${config_js_1.config.deeplinkProtocol}://`, `${config_js_1.config.appProtocol}://${config_js_1.config.appHostname}/`);
};
const navigateToDeeplink = (window, url) => {
    if (!url) {
        return;
    }
    const internalUrl = transformUrlToInternal(url);
    deeplinkLogger.info('Navigate to', url, internalUrl);
    window.loadURL(internalUrl).then(() => {
        window.focus();
    });
};
exports.navigateToDeeplink = navigateToDeeplink;
const handleDeeplinkOnApplicationStartup = () => {
    if (!electron_1.app.isDefaultProtocolClient(config_js_1.config.deeplinkProtocol)) {
        electron_1.app.setAsDefaultProtocolClient(config_js_1.config.deeplinkProtocol);
    }
    electron_1.app.on('open-url', (event, url) => {
        event.preventDefault();
        deeplinkUrl = url;
        deeplinkLogger.info('Open on startup', deeplinkUrl);
    });
};
exports.handleDeeplinkOnApplicationStartup = handleDeeplinkOnApplicationStartup;
const handleDeeplink = (window) => {
    electron_1.app.on('open-url', (event, url) => {
        event.preventDefault();
        (0, exports.navigateToDeeplink)(window, url);
    });
    (0, exports.navigateToDeeplink)(window, deeplinkUrl);
};
exports.handleDeeplink = handleDeeplink;
