const { lookahead } = require('../utils');

// Character codes
const CH_SPACE = 0x20;
const CH_NBSP = 0xA0;
const CH_LINEFEED = 0x0A; // \n
const CH_RETURN = 0x0D; // \r

// Code check helpers
const isWS = c => c === CH_SPACE || c === CH_NBSP || c === CH_LINEFEED || c === CH_RETURN;
const isNotWS = c => !isWS(c);

// Action params
const keyValueRE = /([a-z]\w+)(?:=\s*('[^']+'|"[^"]+"|[^\s)]+))?\s*/;

function stripQuotes(v) {
    v = v.trim();
    const firstChar = v.charAt(0);
    const lastChar = v.charAt(v.length - 1);
    if (firstChar !== lastChar || (firstChar !== '\'' && firstChar !== '"')) {
        return v;
    }
    return v.slice(1, -1);
}

womAction.locator = (value, fromIndex) => value.indexOf('{{', fromIndex);

function womAction(eat, s, silent) {
    if (womAction.locator(s, 0)) {
        return false;
    }
    if (silent) {
        return true;
    }

    let startSeq = 2;
    const endSeq = s.indexOf('}}', lookahead(s, startSeq, isNotWS));
    if (endSeq === -1) {
        return;
    }

    // const actionRange = [0, endSeq + 2];

    const namePos = lookahead(s, startSeq, [isWS, isNotWS])[1] || -1;
    const wsPos = lookahead(s, startSeq, [isNotWS, isWS])[1] || -1;

    const actionNameEnd = (wsPos === -1 || (endSeq + 2) <= wsPos) ? endSeq : wsPos;
    const actionNameStart = ((actionNameEnd < namePos) || namePos === -1) ? startSeq : namePos;

    const actionNameRange = [
        actionNameStart,
        actionNameEnd
    ];

    const name = s.slice(actionNameRange[0], actionNameRange[1]);

    let index  = actionNameEnd;
    let params = {};
    let param;

    // eslint-disable-next-line
    while (param = s.slice(index, endSeq).match(keyValueRE)) {
        params[param[1]] = (param[2] === undefined) ? null : stripQuotes(param[2]);
        index += (param.index + param[0].length);
    }

    return eat(s.slice(0, endSeq + 2))({
        type: 'womAction',
        name: name,
        params: params,
        sourceText: s
    });
}

module.exports = womAction;
