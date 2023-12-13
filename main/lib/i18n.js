"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessage = void 0;
const electron_1 = require("electron");
var LANGUAGES;
(function (LANGUAGES) {
    LANGUAGES["RU"] = "ru";
    LANGUAGES["EN"] = "en";
})(LANGUAGES || (LANGUAGES = {}));
let lang = null;
const messages = {
    ru: {
        'desktop.about': 'О приложении',
        'desktop.terms': 'Пользовательское соглашение',
        'desktop.recommendations': 'Правила рекомендаций',
        'desktop.support': 'Чат с поддержкой',
        'desktop.quit': 'Закрыть приложение',
        'desktop.edit': 'Правка',
        'desktop.undo': 'Отменить',
        'desktop.redo': 'Повторить',
        'desktop.cut': 'Вырезать',
        'desktop.copy': 'Скопировать',
        'desktop.paste': 'Вставить',
        'desktop.select-all': 'Выбрать все'
    },
    en: {
        'desktop.about': 'About',
        'desktop.terms': 'Terms',
        'desktop.recommendations': 'Recommendation rules',
        'desktop.support': 'Support chat',
        'desktop.quit': 'Quit',
        'desktop.edit': 'Edit',
        'desktop.undo': 'Undo',
        'desktop.redo': 'Redo',
        'desktop.cut': 'Cut',
        'desktop.copy': 'Copy',
        'desktop.paste': 'Paste',
        'desktop.select-all': 'Select All'
    }
};
const getLanguage = () => {
    const locale = electron_1.app.getLocale();
    return [LANGUAGES.EN, LANGUAGES.RU].includes(locale) ? locale : LANGUAGES.EN;
};
const formatMessage = (params) => {
    if (!lang) {
        lang = getLanguage();
    }
    return messages[lang][params.id];
};
exports.formatMessage = formatMessage;
