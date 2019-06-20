const codes = require('./charcodes');

const not = (fn) => (...args) => !fn(...args);
const fromCode = String.fromCharCode;
const wsRe = /\s/;

exports.isEqual = code => code === codes.CH_EQUAL;
exports.isNotEqual = not(module.exports.isEqual);

exports.isWS = code => wsRe.test(typeof code === 'number' ? fromCode(code) : code.charAt(0));
exports.isNotWS = not(module.exports.isWS);

exports.isClosingBrace = code => code === codes.CH_RIGHT_PARENTHESIS;
exports.isOpeningBrace = code => code === codes.CH_LEFT_PARENTHESIS;

exports.isPlusSign = code => code === codes.CH_PLUS_SIGN;

exports.isLineFeed = code => code === codes.CH_LINE_FEED;
