'use strict';

const { lookahead } = require('../utils');

function shift(pos, offset) {
    pos.column += offset;
    pos.offset += offset;
    return pos;
}

// const DEBUG = /womImage/.test(process.env.DEBUG || '');

// Character codes
const CH_SPACE = 0x20;
const CH_NBSP = 0xA0;
const CH_LINEFEED = 0x0A; // \n
const CH_RETURN = 0x0D; // \r

const CH_COLON = ':'.charCodeAt(0);
const CH_X = 'x'.charCodeAt(0);

// Code check helpers
const isWS = c => c === CH_SPACE || c === CH_NBSP || c === CH_LINEFEED || c === CH_RETURN;
const isNotWS = c => !isWS(c);
const isDigit = c => 0x30 <= c && c <= 0x39;
const isColon = c => c === CH_COLON;
const isX = c => c === CH_X;

module.exports = womImage;

// Locator
const inf = (v) => v === -1 ? Infinity : v;
const fni = (v) => v === Infinity ? -1 : v;
womImage.locator = (value, fromIndex) => {
    // `0x0:`
    const digitPos = lookahead(value, fromIndex, isDigit);
    if (digitPos === -1) {
        return -1;
    }

    const xPos = lookahead(value, digitPos, isX);
    if (xPos === -1 || !isDigit(value.charCodeAt(xPos - 1)) || !isDigit(value.charCodeAt(xPos + 1))) {
        return -1;
    }

    return digitPos;
};

function womImage(eat, s, silent) {
    if (!isDigit(s.charCodeAt(0))) {
        return;
    }

    const digitPos = 0;
    const xPos = lookahead(s, digitPos + 1, isX);
    if (xPos === -1 || !isDigit(s.charCodeAt(xPos - 1)) || !isDigit(s.charCodeAt(xPos + 1))) {
        return;
    }

    const width = Number(s.slice(digitPos, xPos));
    if (isNaN(width)) {
        return;
    }

    const colonPos = lookahead(s, xPos + 2, isColon);
    if (colonPos === -1 || !isDigit(s.charCodeAt(colonPos - 1)) || isWS(s.charCodeAt(colonPos + 1))) {
        return;
    }

    const height = Number(s.slice(xPos + 1, colonPos));
    if (isNaN(height)) {
        return;
    }

    if (silent) {
        return true;
    }

    const nextWS = lookahead(s, colonPos, isWS);
    const urlEndPos = nextWS === -1 ? s.length : nextWS;
    const url = s.slice(colonPos + 1, urlEndPos);

    return eat(s.slice(0, urlEndPos))({
        type: 'womImage',
        url,
        width: width|0,
        height: height|0,
    });
}
