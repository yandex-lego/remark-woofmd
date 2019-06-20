'use strict';

const { lookahead, lookaheadCloseBracket } = require('../utils/lookahead');
const codes = require('../utils/charcodes');
const { isNotWS, isNotEqual, isEqual, isPlusSign, isOpeningBrace, isLineFeed, isWS } = require('../utils/char-test');

const MAX_DEPTH = 6;

module.exports = womHeading;

function womHeading(eat, value, silent) {
    const isPedantic = this.options.pedantic;
    const now = eat.now();

    let length = value.length + 1;
    let index = 0;
    let nextIndex;

    let subvalue = '';
    let content = '';
    let queue;

    /* Eat initial spacing. */
    index = lookahead(value, index, isNotWS);

    /* Eat equals. */
    nextIndex = lookahead(value, index, isNotEqual);
    queue = value.slice(index, nextIndex);
    const depth = nextIndex - index - 1;
    index = nextIndex;

    let charCode = value.charCodeAt(index);
    if (depth < 1 || depth > MAX_DEPTH ||
        (!isPedantic && isEqual(charCode))) {
        return;
    }

    // ==+
    let expandable = false;
    if (isPlusSign(charCode)) {
        expandable = true;
        index += 1;
        charCode = value.charCodeAt(index);
    }

    /*
    * Examples:
    * =() ...
    * =+() ...
    * =()+ ...
    */
    let anchor = null;
    if (isOpeningBrace(charCode) && !isOpeningBrace(value.charCodeAt(index + 1))) {
        nextIndex = lookaheadCloseBracket(value, index + 1, codes.CH_LEFT_PARENTHESIS);
        if (nextIndex !== -1) {
            anchor = value.slice(index + 1, nextIndex);
            index = nextIndex + 1;
        }
    }

    // Check for expandable again couse it can be `=()+ ...`
    if (anchor && !expandable) {
        if (isPlusSign(value.charCodeAt(index))) {
            expandable = true;
            index += 1;
            charCode = value.charCodeAt(index);
        }
    }

    length = value.length + 1;

    /* Eat intermediate white-space. */
    nextIndex = lookahead(value, index, isNotWS);
    queue = value.slice(0, nextIndex);
    index = nextIndex;

    /* Exit when not in pedantic mode without spacing. */
    if (
        !isPedantic &&
        queue.length === 0 &&
        charCode &&
        !isLineFeed(charCode)
    ) {
        return;
    }

    if (silent) {
        return true;
    }

    /* Eat content. */
    subvalue += queue;
    queue = '';
    content = '';

    index--;
    while (++index < length) {
        charCode = value.charCodeAt(index);

        if (!charCode || isLineFeed(charCode)) {
            break;
        }

        if (!isWS(charCode) && !isEqual(charCode)) {
            content += queue + String.fromCharCode(charCode);
            queue = '';
            continue;
        }

        // Eat WS, but not new line
        while (isWS(charCode) && !isLineFeed(charCode)) {
            queue += String.fromCharCode(charCode);
            charCode = value.charCodeAt(++index);
        }

        while (isEqual(charCode)) {
            queue += String.fromCharCode(charCode);
            charCode = value.charCodeAt(++index);
        }

        while (isWS(charCode) && !isLineFeed(charCode)) {
            queue += String.fromCharCode(charCode);
            charCode = value.charCodeAt(++index);
        }

        index--;
    }

    now.column += subvalue.length;
    now.offset += subvalue.length;
    subvalue += content + queue;

    return eat(subvalue)({
        type: 'womHeading',
        depth,
        anchor,
        expandable,
        children: this.tokenizeInline(content, now)
    });
}
