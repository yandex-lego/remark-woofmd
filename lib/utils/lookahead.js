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
