module.exports = womEscapeTilde;

const WOM_ESCAPE_RE = /~(~|\S+)/;
womEscapeTilde.locator = (value, fromIndex) => value.indexOf('~', fromIndex);

function womEscapeTilde(eat, value, silent) {
    const match = value.match(WOM_ESCAPE_RE);

    if (match && match.index !== 0) {
        return false;
    }

    const [raw, val] = match || [];

    if (!raw) {
        return false;
    }

    if (silent) {
        return true;
    }

    return eat(raw)({
        type: 'womEscape',
        raw,
        value: val
    });
}
