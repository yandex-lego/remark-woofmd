const assert = require('assert');
// const chalk = require('chalk');

const isWS = require('is-whitespace-character');
const isNotWS = (ch) => !isWS(ch);

const flatten = (...x) => [].concat.apply([], [].concat.apply([], x));
const injectBefore = (target, afterMethod, ...objects) => {
    [].splice.apply(target, [target.indexOf(afterMethod), 0, ...flatten(objects)]);
};

const womHeading = require('./lib/tokenizers/heading-wom');
const womStaff = require('./lib/tokenizers/staff');
const womTable = require('./lib/tokenizers/table-wom');
const womLink = require('./lib/tokenizers/link-wom');
const womImage = require('./lib/tokenizers/image-wom');
const womTicket = require('./lib/tokenizers/ticket-wom');
const womBreak = require('./lib/tokenizers/break-wom');
const womEscapeTilde = require('./lib/tokenizers/escape-tilde-wom');
const womAction = require('./lib/tokenizers/action-wom');

const patchedUrl = require('./lib/tokenizers/url');
const list = require('./lib/tokenizers/list');

function plugin() {
    // this.Parser.prototype.wom = {};

    const { inlineTokenizers, inlineMethods, blockTokenizers, blockMethods, interruptParagraph, interruptList } = this.Parser.prototype;

    const womHtml = womBlockGenerator('womHtml', '<#', '#>', { rawContents: true, inline: true });
    const womFormatter = womBlockGenerator('womFormatter', '%%', null, { eatFirst: eatFormatterProps, rawContents: true, inline: true });
    const womBlockquote = womBlockGenerator('womBlockquote', '<[', ']>', { inline: true });
    const womDefinition = womBlockGenerator('womDefinition', '(?', '?)', { eatFirst: eatDefinitionTitle, rawContents: true, inline: true });
    const womCut = womBlockGenerator('womCut', '<{', '}>', { eatFirst: eatCutTitle, inline: true });

    const myInlineTokenizers = new Map([
        ['womBreak', womBreak],

        ['womItalic', inlinePairedText('//', 'womItalic')],
        ['womUnderline', inlinePairedText('__', 'womUnderline')],
        ['womMonospace', inlinePairedText('##', 'womMonospace')],
        ['womSmall', inlinePairedText('++', 'womSmall')],
        ['womStrike', inlinePairedText('--', 'womStrike')],

        ['womSuperscript', inlinePairedText('^^', 'womSuperscript')],
        ['womSubscript', inlinePairedText('vv', 'womSubscript')],

        ['womQuestion', inlinePairedText('??', 'womQuestion')],
        ['womRemark', inlinePairedText('!!', 'womRemark', true)],

        ['womLink', womLink],

        ['womImage', womImage],

        ['womHtml', womHtml],
        ['womFormatter', womFormatter],
        ['womBlockquote', womBlockquote],
        ['womDefinition', womDefinition],
        ['womCut', womCut],

        ['womEscape', womEscape],

        ['womTicket', womTicket],
        ['womColor', womColor],

        ['womStaff', womStaff],

        ['womAction', womAction]
    ]);

    for (const [key, fn] of myInlineTokenizers) {
        inlineTokenizers[key] = fn;
    }
    injectBefore(inlineMethods, 'strong', Array.from(myInlineTokenizers.keys()));

    inlineTokenizers['womEscapeTilde'] = womEscapeTilde;
    injectBefore(inlineMethods, 'code', 'womEscapeTilde');

    inlineTokenizers['url'] = patchedUrl;

    const myBlockTokenizers = new Map([
        ['womHtml', womBlockGenerator('womHtml', '<#', '#>', { rawContents: true, hasInlineAlternative: true })],
        ['womFormatter', womBlockGenerator('womFormatter', '%%', null, { eatFirst: eatFormatterProps, rawContents: true, hasInlineAlternative: true })],
        ['womBlockquote', womBlockGenerator('womBlockquote', '<[', ']>', { hasInlineAlternative: true })],
        ['womDefinition', womBlockGenerator('womDefinition', '(?', '?)', { eatFirst: eatDefinitionTitle, rawContents: true,  hasInlineAlternative: true })],
        ['womCut', womBlockGenerator('womCut', '<{', '}>', { eatFirst: eatCutTitle })],

        ['womTable', womTable],

        ['womHeading', womHeading],
    ]);

    for (const [key, fn] of myBlockTokenizers) {
        blockTokenizers[key] = fn;
    }

    blockTokenizers['list'] = list;

    // console.log(blockMethods);
    injectBefore(blockMethods, 'html', Array.from(myBlockTokenizers.keys()));

    interruptParagraph.push(
        ['womHtml'],
        ['womFormatter'],
        ['womBlockquote'],
        ['womDefinition'],
        ['womCut'],
        ['womTable'],
        ['womHeading'],
    );

    interruptList.push(
        ['womHeading']
    );

    // blockTokenizers.womFormatter = womFormatter;
    // injectBefore(blockMethods, 'text', 'womFormatter');

    // blockTokenizers.womBlockquote = womBlockquote;
    // injectBefore(blockMethods, 'text', 'womBlockquote');

    // console.log(inlineMethods);
    // blockTokenizers.womFormatter = womFormatter;
    // console.log(blockMethods);
}

class Ctx {
    constructor(eat, value) {
        this.add_ = null;

        this.eat_ = eat;
        this.value = value;

        // Skip whitespaces
        this.index = this.lookAhead(isNotWS, 0);
        // console.log({ SAAAAAAAAAA: this.value.slice(0, this.index) });
    }

    cut(size) {
        this.index += size;
        let since = this.index - size;
        // let pindex = this.index;
        return this.value.slice(since, this.index);
    }

    chew(index = this.index) {
        assert(!this.add_, 'Something already eaten');

        const toEat = this.value.slice(0, index);
        this.index = index;

        return this.eat_(toEat);
    }

    lookAhead(test, offset = this.index) {
        return lookAhead(this.value, test, offset);
    }

    static gen(eat, value, index) {
        if (!eat.ctx || eat.ctx.value !== value) {
            // console.log('new ctx ', {value, index});
            eat.ctx = new Ctx(eat, value, index);
        }
        return eat.ctx;
    }
}

function lookAhead(value, test, offset) {
    const l = value.length;
    let i = offset === null ? this.index : offset;
    while (i < l && !test(value.charAt(i))) {
        i += 1;
    }
    return i;
}

function indexOfSeq (seq) {
    return ctx => ctx.value.indexOf(seq, ctx.index);
}

function indexOfSameClosingSeq (seq) {
    const ch = seq.charAt(0);
    const closingRe = new RegExp('[^' + ch + ']' + ch + ch + '([^' + ch + ']|$)');

    return ctx => {
        const res = ctx.value.indexOf(seq, ctx.value.search(closingRe));
        return ctx.index < res ? res : -1;
    };
}

function indexOfClosingSeq (closeSeq, openSeq) {
    return ctx => {
        const v = ctx.value;
        // startSeq
        let index = ctx.index;
        let depth = 0;
        while (true) { // eslint-disable-line
            const openIndex = v.indexOf(openSeq, index);
            const closeIndex = v.indexOf(closeSeq, index);

            // <{ ... <{→ ... }> ...
            if (depth) {
                depth -= 1;
                index = closeIndex + closeSeq.length;
                continue;
            }

            // If there are no opening nor closing sequences just return closing seq index or -1
            if (openIndex === -1 || closeIndex === -1) {
                return closeIndex;
            }

            // <{→ ... <{ ... }> ...
            if (openIndex < closeIndex) {
                depth += 1;
                index = openIndex + openSeq.length;
                continue;
            }

            // <{ ... <{ ... }> ... →}>
            return closeIndex;
        }
    };
}

function womBlockGenerator(type, startSeq_, endSeq_ = null, { eatFirst = null, rawContents = false, inline = false, hasInlineAlternative = false } = {}) {
    const skipSpaces = !inline;
    const startSeq = indexOfSeq(startSeq_);
    const endSeq = endSeq_ !== null ? indexOfClosingSeq(endSeq_, startSeq_) : indexOfSameClosingSeq(startSeq_);

    const startSeqLen = startSeq_.length;
    const endSeqLen = endSeq_ !== null ? endSeq_.length : startSeqLen;

    eatFirst || (eatFirst = () => {});

    if (inline) {
        womBlock.locator = (value, index) => value.indexOf(startSeq_, index);
    }

    return womBlock;
    function womBlock(eat, value, silent) {
        const ctx = Ctx.gen(eat, value);

        // console.log({ctx, value, silent, q: startSeq(ctx)});
        // console.log('YEAH', {value, silent}, startSeq(ctx));
        if (!skipSpaces && ctx.index !== 0) {
            return;
        }
        if (startSeq(ctx) !== ctx.index) {
            return;
        }
        if (silent) {
            return true;
        }

        ctx.cut(startSeqLen);

        const lastIndex = endSeq(ctx);
        if (lastIndex === -1) {
            return;
        }

        const props = eatFirst.call(this, ctx);

        if (hasInlineAlternative && !(props && 'parseContents' in props || props.parseContents)) {
            const nextEOL = ctx.value.indexOf('\n', ctx.index);
            if (nextEOL !== -1 && nextEOL > lastIndex) {
                return;
            }
        }

        let requiresRawContents = rawContents;
        if (props && 'parseContents' in props) {
            requiresRawContents = !props.parseContents;
            delete props.parseContents;
        }

        const inner = ctx.cut(lastIndex - ctx.index);

        ctx.cut(endSeqLen);

        const now = eat.now();
        now.column += startSeqLen;
        now.offset += startSeqLen;

        const add = ctx.chew();

        // console.log({ inner, ...ctx, w: ctx.value.slice(0, ctx.index) });

        // console.log({ queue, index, });

        // console.log(queue, ctx);

        const contentProps = {};

        if (requiresRawContents) {
            contentProps.value = inner;
        } else if (inline === true) {
            contentProps.children = this.tokenizeInline(inner, now);
        } else {
            const exit = this.enterBlock();
            contentProps.children = this.tokenizeBlock(inner, now);
            exit();
        }

        return add({ type, ...props, ...contentProps });
    }
}

const WOM_ESCAPE_SEQ = '""';
womEscape.locator = (value, fromIndex) => value.indexOf(WOM_ESCAPE_SEQ, fromIndex);
function womEscape(eat, value, silent) {
    const startingSeqOffset = value.indexOf(WOM_ESCAPE_SEQ, 0);
    const endingSeqOffset = startingSeqOffset === -1
        ? -1
        : value.indexOf(WOM_ESCAPE_SEQ, startingSeqOffset + WOM_ESCAPE_SEQ.length);

    if (startingSeqOffset !== 0 || endingSeqOffset === -1) {
        return false;
    }

    if (silent) {
        return true;
    }


    const raw = value.slice(0, endingSeqOffset + WOM_ESCAPE_SEQ.length);
    const inner = raw.slice(startingSeqOffset + WOM_ESCAPE_SEQ.length, endingSeqOffset);

    return eat(raw)({
        type: 'womEscape',
        raw,
        value: inner
    });
}

function inlinePairedText(charPair, type, colorful = false) {
    const firstCharCode = charPair.charCodeAt(0);
    const CH_MINUS = '-'.charCodeAt(0);

    const defaultLocator = (value, fromIndex) => value.indexOf(charPair, fromIndex);
    const locator = (firstCharCode === CH_MINUS)
        ? (value, fromIndex) => {
            let res = fromIndex;
            do {
                res = defaultLocator(value, res);
                if (res === -1 || value.charCodeAt(res + 2) !== firstCharCode) {
                    return res;
                }
                res += 2;
            } while (res > value.length);
            return -1;
        }
        : defaultLocator;

    womInlinePaired.locator = locator;

    function findTheEnd(value, i) {
        let res = locator(value, i);
        if (res === -1) {
            return -1;
        }

        const lineBreak = value.indexOf('\n', i + 1);
        let allowedEnd = res;
        // console.log('Calculating allowedEnd for ', {charPair, value, i})
        while (!isWS(value.charAt(allowedEnd + 1)) && allowedEnd < value.length) {
            allowedEnd += 1;
            // console.log(value.charAt(allowedEnd + 1), !isWS(value.charAt(allowedEnd + 1)), allowedEnd < value.length);
        }

        while(i < allowedEnd) { // eslint-disable-line
            // console.log('Ищем конец', nextPair);
            const nextI = locator(value, i + 1);
            // console.log(String(nextI).padStart(5), i, { allowedEnd }, i !== -1 ? value.slice(i, 20) + chalk.grey('←') : null);
            if (nextI === -1 || nextI > allowedEnd) {
                // console.log(value.charCodeAt(nextI + 2) === firstCharCode);
                break;
            }
            i = nextI;
        }

        if (value.slice(i, i + 2) !== charPair) {
            // console.log('TROUBLES HERE MR JOHNSON');
            // console.log({charPair, i, len: value.length, found: value.slice(i, i + 2), value});
            // console.log(value);
            // console.log('-'.repeat(i) + '^^');
            return -1;
        }

        if (lineBreak !== -1 && lineBreak < i) {
            return -1;
        }

        return i;
    }

    function womInlinePaired(eat, value, silent) {
        this.inInlinePairs || (this.inInlinePairs = new Set());
        // Prevent nested inlines of the same type
        if (this.inInlinePairs.has(type)) {
            return;
        }

        const closestPos = locator(value, 0);
        if (closestPos === -1) {
            return;
        }

        const nextPair = findTheEnd(value, closestPos + 2);
        if (nextPair === -1 || value.charCodeAt(0) !== firstCharCode || value.indexOf(charPair) !== 0) {
            return false;
        }

        // Fix multiples, skip until WS or  and then decide to break or not
        // for (let x = 2; x < value.length; x += 1) {
        //     const cc = value.charCodeAt(x); // Character code
        //     if (cc === firstCharCode) {
        //         continue;
        //     }
        //     if (isWS(value.charAt(x))) {
        //         return false;
        //     }
        //     break;
        // }

        if (silent) {
            return true;
        }

        const now = eat.now();
        now.column += 2;
        now.offset += 2;

        let inner = value.slice(2, nextPair);
        const outer = value.slice(0, inner.length + 4);

        const dye = {};
        if (colorful) {
            // let color = null;
            // const colorPos = {};
            dye.color = makeColor(null);
            if (inner.charAt(0) === '(') {
                const lastColorIndex = inner.indexOf(')', 1);
                if (lastColorIndex !== -1) {
                    dye.color = makeColor(inner.slice(1, lastColorIndex));
                    now.offset += lastColorIndex;
                    now.column += lastColorIndex;
                    inner = inner.slice(lastColorIndex + 1);
                }
            }
        }

        this.inInlinePairs.add(type);

        const res = eat(outer)({
            type,
            ...dye,
            children: this.tokenizeInline(inner, now)
        });

        this.inInlinePairs.delete(type);

        return res;
    }
    return womInlinePaired;
}

function makeColor(raw) {
    const value = ({
        red: '@red',
        'крас': '@red',
        'красный': '@red',

        green: '@green',
        'зел': '@green',
        'зеленый': '@green',

        blue: '@blue',
        'син': '@blue',
        'синий': '@blue',

        grey: '@gray',
        gray: '@gray',
        'сер': '@gray',
        'серый': '@gray',

        yellow: '@yellow',
        'жел': '@yellow',
        'желтый': '@yellow'
    })[raw] || '@red';

    return {type: 'color', value, raw}
}



const WOM_COLOR_RE = /^#([0-9a-f]{3}|[0-9a-f]{6})\b/i;
womColor.locator = (value, index) => value.indexOf('#', index);
function womColor(eat, value, silent) {
    const index = womColor.locator(value, 0);
    if (index !== 0) {
        return false;
    }

    const [raw, color] = value.slice(index, 7).match(WOM_COLOR_RE) || [];
    if (!raw) {
        return false;
    }
    if (silent) {
        return true;
    }

    return eat(raw)({ type: 'color', value: color.toLowerCase(), raw });
}

function eatFormatterProps(ctx) {
    const { index, value } = ctx;
    if (value.charAt(index) !== '(') {
        return null;
    }

    const keyValueRE = /([a-z]\w+)(?:=\s*('[^']+'|"[^"]+"|[^\s)]+))?\s*/;
    const chunks = [];
    let i = index + 1;
    while (i < value.length) {
        const kvm = value.slice(i).match(keyValueRE);

        chunks.push({ raw: kvm[0], name: kvm[1], value: kvm[2] ? stripQuotes(kvm[2]) : null });

        i += kvm[0].length;

        // the last one
        if (value.charAt(i) === ')') {
            i += 1;
            break;
        }
    }

    ctx.cut(i - index);

    const format = chunks[0] && (!chunks[0].value && chunks.shift().name) || null;
    const isMarkdown = ['md', 'markdown', 'wacko'].indexOf(format) !== -1;

    return {
        type: isMarkdown ? 'womMarkdown' : 'womFormatter',
        parseContents: isMarkdown,
        format,
        attributes: chunks.reduce((res, { name, value }) => { // eslint-disable-line no-shadow
            res[name] = value;
            return res;
        }, {})
    };

    function stripQuotes(v) {
        v = v.trim();
        const firstChar = v.charAt(0);
        const lastChar = v.charAt(v.length - 1);
        if (firstChar !== lastChar || (firstChar !== '\'' && firstChar !== '"')) {
            return v;
        }
        return v.slice(1, -1);
    }
}

function eatDefinitionTitle(ctx) {
    const { index, value } = ctx;

    const closePos = value.indexOf('?)', index);
    const eqPos = value.indexOf('==', index);
    const hasEq = eqPos !== -1 && closePos > eqPos;

    const title = value.slice(index, hasEq ? eqPos : ctx.lookAhead(isWS, index));

    ctx.cut(title.length + (hasEq ? 2 : 1));

    return {
        title,
        equals: hasEq
    };
}

function eatCutTitle(ctx) {
    const { index, value } = ctx;

    const closePos = value.indexOf('}>', index);
    const eolPos = value.indexOf('\n', index);
    const cutPos = Math.min(closePos === -1 ? Infinity : closePos, eolPos === -1 ? Infinity : eolPos);

    const title = ctx.cut(cutPos - index);

    ctx.cut(cutPos === closePos ? 0 : 1); // \n or nothing

    const now = ctx.eat_.now();
    now.offset += index;
    now.column += 1;
    now.line += 1;

    return {
        title: this.tokenizeBlock(title, now)
    };
}

exports.remark = plugin;
exports.vis = require('./utils').vis;
exports.dump = require('./utils').dump;
