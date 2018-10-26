'use strict';

const { lookahead } = require('../utils');

function shift(pos, offset) {
    pos.column += offset;
    pos.offset += offset;
    return pos;
}

// Character codes
const CH_SPACE = 0x20;
const CH_NBSP = 0xA0;
const CH_LINEFEED = 0x0A; // \n
const CH_RETURN = 0x0D; // \r
const CH_ASTERISK = '*'.charCodeAt(0);
const CH_HASH = '#'.charCodeAt(0);

// Code check helpers
const isWS = c => c === CH_SPACE || c === CH_NBSP || c === CH_LINEFEED || c === CH_RETURN;
const isNotWS = c => !isWS(c);

module.exports = womLink;

// Locator
const inf = (v) => v === -1 ? Infinity : v;
const fni = (v) => v === Infinity ? -1 : v;
womLink.locator = (value, fromIndex) => fni(Math.min(
    inf(value.indexOf('((', fromIndex)),
    inf(value.indexOf('[[', fromIndex))
));

function womLink(eat, s, silent) {
    if (womLink.locator(s, 0) !== 0) {
        return;
    }

    const brackets = s.charAt(0) === '[' || false;

    let startSeq = 2;
    const closer = brackets ? ']]' : '))';
    const endSeq = s.indexOf(closer, lookahead(s, startSeq, isNotWS));
    if (endSeq === -1) {
        return;
    }

    if (silent) {
        return true;
    }

    let type = 'womLink';

    if (s.charCodeAt(startSeq) === CH_ASTERISK) {
        type = 'womFootnoteReference';
        startSeq++;
    }

    if (s.charCodeAt(startSeq) === CH_HASH) {
        type = 'womFootnoteDefinition';
        startSeq++;
    }

    const wsPos = lookahead(s, startSeq, [isNotWS, isWS])[1] || -1;
    const hasWs = wsPos !== -1 && endSeq > wsPos;

    const linkRange = [0, endSeq + 2];
    const urlRange = [startSeq, hasWs ? wsPos : endSeq];
    const textRange = hasWs ? [wsPos + 1, endSeq] : null;

    // console.log({ linkRange, urlRange, textRange });
    // console.log(s, s.slice(eat.now().offset));
    // console.log(s.slice(linkRange[0], linkRange[1]));

    // console.log('EAT', s.slice(0, linkRange[1]))

    let node;
    if (type === 'womFootnoteReference' || type === 'womFootnoteDefinition') {
        node = {
            type,
            identifier: s.slice(urlRange[0], urlRange[1]),
            label: hasWs ? s.slice(textRange[0], textRange[1]) : null
        };
    } else {
        node = {
            type,
            url: s.slice(urlRange[0], urlRange[1]),
            brackets,
            children: hasWs
                ? this.tokenizeInline(s.slice(textRange[0], textRange[1]), shift(eat.now(), textRange[0]))
                : []
        };
    }

    return eat(s.slice(0, linkRange[1]))(node);
}
