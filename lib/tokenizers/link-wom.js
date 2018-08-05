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
    const startSeq = womLink.locator(s, 0);
    if (startSeq !== 0) {
        return;
    }

    const brackets = s.charAt(startSeq) === '[' || false;

    let index = startSeq + 2;
    const closer = brackets ? ']]' : '))';
    const endSeq = s.indexOf(closer, lookahead(s, index, isNotWS));
    if (endSeq === -1) {
        return;
    }

    if (silent) {
        return true;
    }

    const wsPos = lookahead(s, index, [isNotWS, isWS])[1] || -1;
    const hasWs = wsPos !== -1 && endSeq > wsPos;

    const linkRange = [startSeq, endSeq + 2];
    const urlRange = [startSeq + 2, hasWs ? wsPos : endSeq];
    const textRange = hasWs ? [wsPos + 1, endSeq] : null;

    // console.log({ linkRange, urlRange, textRange });
    // console.log(s, s.slice(eat.now().offset));
    // console.log(s.slice(linkRange[0], linkRange[1]));

    // console.log('EAT', s.slice(0, linkRange[1]))
    return eat(s.slice(0, linkRange[1]))({
        type: 'womLink',
        url: s.slice(urlRange[0], urlRange[1]),
        brackets,
        children: hasWs
            ? this.tokenizeInline(s.slice(textRange[0], textRange[1]), shift(eat.now(), textRange[0]))
            : []
    });
}
