const codes = require('./charcodes');

/**
 * Look for index of input string matching test function
 *
 * @param {string} input - search string
 * @param {number} offset
 * @param {function|function[]} tests
 * @returns {number|number[]}
 */
exports.lookahead = (input, offset, tests) => {
    const length = input.length;
    let idx = offset;

    const isArray = Array.isArray(tests);

    const res = isArray ? [] : null;
    for (const test of isArray ? tests : [tests]) {
        let found = null;
        while (idx < length) {
            if (test(input.charCodeAt(idx))) {
                found = idx;
                idx += 1;
                break;
            }
            idx += 1;
        }

        if (!isArray) {
            return found === null ? -1 : found;
        }

        res.push(found);
    }

    return res;
};

const bracketsMatch = {
    [codes.CH_LEFT_PARENTHESIS]: codes.CH_RIGHT_PARENTHESIS
};

/**
 * Look ahead for closing brace, counting opening in the way
 * @param {string} value
 * @param {number} offset
 * @param {number} openBracket
 * @returns {number}
 */
exports.lookaheadCloseBracket = (value, offset, openBracket) => {
    const closeBracket = bracketsMatch[openBracket];
    const isOpenBracket = (code) => code === openBracket;
    const isCloseBracket = (code) => code === closeBracket;

    let openCount = 0;
    const length = value.length;
    let idx = offset === null ? this.index : offset;

    while (idx < length) {
        if (isOpenBracket(value.charCodeAt(idx))) {
            openCount++;
        }

        if (isCloseBracket(value.charCodeAt(idx))) {
            openCount--;

            if (openCount < 0) {
                return idx;
            }
        }
        idx += 1;
    }

    return -1;
};
