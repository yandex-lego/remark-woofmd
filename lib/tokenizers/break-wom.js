module.exports = womBreak;

const CH_MINUS = '-'.charCodeAt(0);
function womBreak(eat, value, silent) {
    if (womBreak.locator(value, 0)) {
        return false;
    }
    if (silent) {
        return true;
    }

    let end;
    for (end = 2; end < value.length; end += 1) {
        if (value.charCodeAt(end) !== CH_MINUS) {
            break;
        }
    }

    const raw = '-'.repeat(end);
    return eat(raw)({ type: 'womBreak', raw });
}
womBreak.locator = (value, fromIndex) => value.indexOf('---', fromIndex);
