'use strict';

const { lookahead } = require('../utils');

// Character codes
const CH_A = 'A'.charCodeAt(0);
const CH_Z = 'Z'.charCodeAt(0);

const CH_OBRACKET = '['.charCodeAt(0);
const CH_CBRACKET = ']'.charCodeAt(0);
const CH_OPAREN = '('.charCodeAt(0);
const CH_CPAREN = ')'.charCodeAt(0);
const CH_SLASH = '/'.charCodeAt(0);

// Code check helpers
const isDigit = c => 0x30 <= c && c <= 0x39;
const isNotDigit = c => !isDigit(c);
const isAlpha = c => CH_A <= c && c <= CH_Z;

const isOBracket = c => c === CH_OBRACKET;
const isCBracket = c => c === CH_CBRACKET;
const isOParen = c => c === CH_OPAREN;
const isCParen = c => c === CH_CPAREN;

const ticketRE = /(?:^|[^/\s\t])[A-Z]{2,}-[0-9]+\b/g;
const realmRE = /(?:^|\s)[a-z][-\w]*(?:\.[a-z][-\w]*)+(?:\/|$)/i;

module.exports = womTicket;

// Locator
womTicket.locator = (value, fromIndex) => {
    // `QUEUE-12345`
    let match;
    ticketRE.lastIndex = null;
    while (match = ticketRE.exec(value)) { // eslint-disable-line no-cond-assign
        const alphaPos = match.index;
        if (alphaPos < fromIndex) {
            continue;
        }

        if (value.charCodeAt(alphaPos - 1) === CH_SLASH) {
            const realm = realmRE.exec(value.slice(0, alphaPos - 1));
            if (!realm) {
                continue;
            }

            return realm.index;
        }

        return alphaPos;
    }

    return -1;
};

function womTicket(eat, s, silent) {
    const realm = realmRE.exec(s);

    const fromIndex = realm ? realm[0].length : 0;
    if (!isAlpha(s.charCodeAt(fromIndex))) {
        return;
    }

    const alphaPos = womTicket.locator(fromIndex > 0 ? s.slice(fromIndex) : s) + fromIndex;
    if (alphaPos === -1 || s.slice(fromIndex, alphaPos).trim()) {
        return;
    }

    if (silent) {
        return true;
    }

    const endValuePos = lookahead(s, alphaPos + 1, [isDigit, isNotDigit])[1];
    let endSeqPos = endValuePos || s.length;

    const node = {
        type: 'womTicket',
        value: s.slice(alphaPos, endSeqPos),
        title: null,
        assignee: null,
        realm: realm ? realm[0].slice(0, -1) : null,
        protocol: null,
        url: realm ? s.slice(0, endValuePos) : null,
    };

    if (endValuePos !== null && isOBracket(s.charCodeAt(endValuePos))) {
        const poses = lookahead(s, endValuePos + 1, [isCBracket, isOParen, isCParen]);

        if (poses[2] !== null) {
            endSeqPos = poses[2] + 1;

            const now = eat.now();
            now.column += endValuePos + 1;
            now.offset += endValuePos + 1;
            node.title = this.tokenizeInline(s.slice(endValuePos + 1, poses[0]), now);
            const assignee = s.slice(poses[1] + 1, poses[2]).trim();
            assignee && (node.assignee = assignee);
        }
    }

    return eat(s.slice(0, endSeqPos))(node);
}
