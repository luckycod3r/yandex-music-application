"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUncaughtException = exports.toPlainError = void 0;
const electron_log_1 = __importDefault(require("electron-log"));
const firstLine = (message) => {
    if (typeof message === 'string') {
        const [line] = message.split('\n');
        return line;
    }
    return message;
};
const toPlainError = (error) => {
    if (error instanceof Error) {
        return `${error.name} ${firstLine(error.message)}`;
    }
    return error;
};
exports.toPlainError = toPlainError;
const handleUncaughtException = () => {
    const globalErrorLogger = electron_log_1.default.scope('UncaughtException');
    process.on('uncaughtException', (error) => {
        globalErrorLogger.error((0, exports.toPlainError)(error));
    });
};
exports.handleUncaughtException = handleUncaughtException;
