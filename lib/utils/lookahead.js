exports.lookahead = (s, offset, tests) => {
    const l = s.length;
    let i = offset;

    const isArray = Array.isArray(tests);

    const res = isArray ? [] : null;
    for (const test of isArray ? tests : [tests]) {
        let found = null;
        while (i < l) {
            if (test(s.charCodeAt(i))) {
                found = i;
                i += 1;
                break;
            }
            i += 1;
        }

        if (!isArray) {
            return found === null ? -1 : found;
        }

        res.push(found);
    }

    return res;
};
