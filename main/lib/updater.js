"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updater = void 0;
const semver = require('semver');
const electron_1 = require("electron");
const electron_updater_1 = require("electron-updater");
const electron_log_1 = __importDefault(require("electron-log"));
const handleError_js_1 = require("./handlers/handleError.js");
const config_js_1 = require("../config.js");
const updateUrgency_js_1 = require("../constants/updateUrgency.js");
const updateStatus_js_1 = require("../constants/updateStatus.js");
const updateLogger = electron_log_1.default.scope('UpdateLogger');
electron_updater_1.autoUpdater.logger = updateLogger;
class Updater {
    latestAvailableVersion = null;
    updateStatus = updateStatus_js_1.UpdateStatus.IDLE;
    updaterId = null;
    onUpdateListeners = [];
    constructor() {
        electron_updater_1.autoUpdater.autoRunAppAfterInstall = true;
        electron_updater_1.autoUpdater.on('error', (error) => {
            updateLogger.error('Updater error', (0, handleError_js_1.toPlainError)(error));
        });
        electron_updater_1.autoUpdater.on('checking-for-update', () => {
            updateLogger.log('Checking for update');
        });
        electron_updater_1.autoUpdater.on('update-downloaded', (updateInfo) => {
            updateLogger.log('Update downloaded', updateInfo.version);
            if ('updateUrgency' in updateInfo) {
                if (updateInfo.updateUrgency === updateUrgency_js_1.UpdateUrgency.HARD) {
                    updateLogger.info('This update should be installed now');
                    this.install();
                    return;
                }
            }
            if (config_js_1.config.common.DEPRECATED_VERSIONS) {
                const isDeprecatedVersion = semver.satisfies(electron_1.app.getVersion(), config_js_1.config.common.DEPRECATED_VERSIONS);
                if (isDeprecatedVersion) {
                    updateLogger.info('This version is deprecated', electron_1.app.getVersion(), config_js_1.config.common.DEPRECATED_VERSIONS);
                    this.install();
                    return;
                }
            }
            this.latestAvailableVersion = updateInfo.version;
            this.onUpdateListeners.forEach((listener) => {
                listener(updateInfo.version);
            });
        });
    }
    updateApplier(updateResult) {
        const { downloadPromise, updateInfo } = updateResult;
        if ('updateUrgency' in updateInfo) {
            updateLogger.info('Urgency', updateInfo.updateUrgency);
        }
        if ('commonConfig' in updateInfo) {
            updateLogger.info('Common config', updateInfo.commonConfig);
            (0, config_js_1.applyCommonConfig)(updateInfo.commonConfig);
        }
        if (!downloadPromise) {
            return;
        }
        updateLogger.info('New version available', electron_1.app.getVersion(), '->', updateInfo.version);
        this.updateStatus = updateStatus_js_1.UpdateStatus.DOWNLOADING;
        downloadPromise
            .then((downloadResult) => {
            if (downloadResult) {
                this.updateStatus = updateStatus_js_1.UpdateStatus.DOWNLOADED;
                updateLogger.info(`Download result: ${downloadResult}`);
            }
        })
            .catch((error) => {
            this.updateStatus = updateStatus_js_1.UpdateStatus.IDLE;
            updateLogger.error('Downloader error', (0, handleError_js_1.toPlainError)(error));
        });
    }
    async check() {
        if (this.updateStatus !== updateStatus_js_1.UpdateStatus.IDLE) {
            updateLogger.log('New update is processing', this.updateStatus);
            return;
        }
        try {
            const updateResult = await electron_updater_1.autoUpdater.checkForUpdates();
            if (!updateResult) {
                updateLogger.log('No update found');
                return;
            }
            this.updateApplier(updateResult);
        }
        catch (error) {
            updateLogger.error('Update check error', (0, handleError_js_1.toPlainError)(error));
        }
    }
    start() {
        this.check();
        this.updaterId = setInterval(() => {
            this.check();
        }, config_js_1.config.common.UPDATE_POLL_INTERVAL);
    }
    stop() {
        if (this.updaterId) {
            clearInterval(this.updaterId);
        }
    }
    onUpdate(listener) {
        this.onUpdateListeners.push(listener);
    }
    install() {
        updateLogger.info('Installing a new version', this.latestAvailableVersion);
        electron_updater_1.autoUpdater.quitAndInstall();
    }
}
exports.updater = new Updater();
