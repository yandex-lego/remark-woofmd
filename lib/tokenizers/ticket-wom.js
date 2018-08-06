'use strict';

const { lookahead } = require('../utils');

// const DEBUG = /womTicket/.test(process.env.DEBUG || '');

// Character codes
const CH_DASH = '-'.charCodeAt(0);
const CH_A = 'A'.charCodeAt(0);
const CH_Z = 'Z'.charCodeAt(0);

const CH_OBRACKET = '['.charCodeAt(0);
const CH_CBRACKET = ']'.charCodeAt(0);
const CH_OPAREN = '('.charCodeAt(0);
const CH_CPAREN = ')'.charCodeAt(0);

// Code check helpers
const isDigit = c => 0x30 <= c && c <= 0x39;
const isNotDigit = c => !isDigit(c);
const isAlpha = c => CH_A <= c && c <= CH_Z;
const isDash = c => c === CH_DASH;

const isOBracket = c => c === CH_OBRACKET;
const isCBracket = c => c === CH_CBRACKET;
const isOParen = c => c === CH_OPAREN;
const isCParen = c => c === CH_CPAREN;

module.exports = womTicket;

// Locator
womTicket.locator = (value, fromIndex) => {
    // `QUEUE-12345`
    const alphaPos = lookahead(value, fromIndex, isAlpha);
    if (alphaPos === -1) {
        return -1;
    }

    const dashPos = lookahead(value, alphaPos + 1, isDash);
    if (dashPos === -1 || !isDigit(value.charCodeAt(dashPos + 1))) {
        return -1;
    }

    let i = alphaPos;
    while (i < dashPos) {
        if (!isAlpha(value.charCodeAt(i))) {
            return -1;
        }
        i += 1;
    }

    return alphaPos;
};

function womTicket(eat, s, silent) {
    if (!isAlpha(s.charCodeAt(0))) {
        return;
    }

    const alphaPos = womTicket.locator(s, 0);
    if (alphaPos === -1) {
        return;
    }

    if (silent) {
        return true;
    }

    const endValuePos = lookahead(s, alphaPos + 1, [isDigit, isNotDigit])[1];
    let endSeqPos = endValuePos || s.length;
    const value = s.slice(alphaPos, endSeqPos);

    const node = {
        type: 'womTicket',
        value,
        title: null,
        assignee: null,
    };

    if (endValuePos !== null && isOBracket(s.charCodeAt(endValuePos))) {
        const poses = lookahead(s, endValuePos + 1, [isCBracket, isOParen, isCParen]);
        endSeqPos = poses[2] + 1;

        const now = eat.now();
        now.column += endValuePos + 1;
        now.offset += endValuePos + 1;
        node.title = this.tokenizeInline(s.slice(endValuePos + 1, poses[0]), now);
        node.assignee = s.slice(poses[1] + 1, poses[2]).trim();
    }

    return eat(s.slice(0, endSeqPos))(node);
}
