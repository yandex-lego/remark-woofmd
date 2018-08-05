const assert = require('assert');

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

function plugin() {
    // this.Parser.prototype.wom = {};

    const { inlineTokenizers, inlineMethods, blockTokenizers, blockMethods, interruptParagraph } = this.Parser.prototype;

    const myInlineTokenizers = new Map([
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

        ['womEscape', womEscape],

        ['womBreak', womBreak],
        ['womHelp', womHelp],
        ['womColor', womColor],

        ['womStaff', womStaff],
    ]);

    for (const [key, fn] of myInlineTokenizers) {
        inlineTokenizers[key] = fn;
    }
    injectBefore(inlineMethods, 'strong', Array.from(myInlineTokenizers.keys()));
    // this.Parser.prototype.inlineTokenizers = {text: inlineTokenizers.text};
    // this.Parser.prototype.inlineMethods = ['text'];

    // const oldLinkLocator = inlineTokenizers.link.locator;
    // inlineTokenizers.reference = () => {};
    // inlineTokenizers.reference.locator = (value, index) => {
    //     return -1; oldLinkLocator(value, index);
    // };
    // console.log(inlineTokenizers);

    const myBlockTokenizers = new Map([
        ['womFormatter', womBlockGenerator('womFormatter', '%%', null, { eatFirst: eatFormatterProps, rawContents: true })],
        ['womBlockquote', womBlockGenerator('womBlockquote', '<[', ']>')],
        ['womDefinition', womBlockGenerator('womDefinition', '(?', '?)', { eatFirst: eatDefinitionTitle })],
        ['womCut', womBlockGenerator('womCut', '<{', '}>', { eatFirst: eatCutTitle })],

        ['womHtml', womBlockGenerator('womHtml', '<#', '#>', { rawContents: true })],

        ['womTable', womTable],

        ['womHeading', womHeading],
    ]);

    for (const [key, fn] of myBlockTokenizers) {
        blockTokenizers[key] = fn;
    }
    // console.log(blockMethods);
    injectBefore(blockMethods, 'html', Array.from(myBlockTokenizers.keys()));

    interruptParagraph.push(
        ['womFormatter'],
        ['womCut'],
        ['womBlockquote'],
        ['womDefinition'],
        ['womHtml'],
        ['womHeading'],
        ['womTable']
    );

    // blockTokenizers.womFormatter = womFormatter;
    // injectBefore(blockMethods, 'text', 'womFormatter');

    // blockTokenizers.womBlockquote = womBlockquote;
    // injectBefore(blockMethods, 'text', 'womBlockquote');

    // console.log(inlineMethods);
    // blockTokenizers.womFormatter = womFormatter;
    // console.log(blockMethods);
}

const CH_MINUS = '-'.charCodeAt(0);
function womBreak(eat, value, silent) {
    if (womBreak.locator(value, 0)) {
        return false;
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

// help#:200912039020818
const isDigit = c => { const cc = c.charCodeAt(0); return cc >= 48 && cc <= 57; };
const HELP_PREFIX = 'help#:';
function womHelp(eat, value, silent) {
    if (womHelp.locator(value, 0) !== 0 || !isDigit(value.charAt(HELP_PREFIX.length))) {
        return false;
    }
    if (silent) {
        return true;
    }

    const end = lookAhead(value, v => !isDigit(v), HELP_PREFIX.length);

    const raw = value.slice(0, end);
    // console.log(raw);
    return eat(raw)({ type: 'womHelp', raw, value: raw.slice(6) });
}
womHelp.locator = (value, index) => value.indexOf(HELP_PREFIX, index);

class Ctx {
    constructor(eat, value) {
        this.add_ = null;

        this.eat_ = eat;
        this.value = value;

        // Skip whitespaces
        this.index = this.lookAhead(isNotWS, 0);
        // console.log({ SAAAAAAAAAA: this.value.slice(0, this.index) });
    }

    cut(size, skip = null) {
        this.index += size;
        let since = this.index - size;
        let pindex = this.index;
        // console.log({ a: this.value.slice(since, this.index), b: this.value.slice(since, this.lookAhead(isWS, this.index)) });
        // skip && (this.index = this.lookAhead(isWS, this.index));
        // console.log({ since, pindex, z: this.index });
        return this.value.slice(since, this.index);
    }

    chew(index = this.index) {
        assert(!this.add_, 'Something already eaten');

        const toEat = this.value.slice(0, this.index);

        return this.eat_(toEat);

        return toEat;
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

function indexOfClosingSeq (closeSeq, openSeq) {
    return ctx => {
        const v = ctx.value;
        // startSeq
        let index = ctx.index;
        let depth = 0;
        while (true) {
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

function womBlockGenerator(type, startSeq_, endSeq_ = null, { eatFirst = null, rawContents = false } = {}) {
    const startSeq = indexOfSeq(startSeq_);
    const endSeq = endSeq_ !== null ? indexOfClosingSeq(endSeq_, startSeq_) : startSeq;

    const startSeqLen = startSeq_.length;
    const endSeqLen = endSeq_ !== null ? endSeq_.length : startSeqLen;

    eatFirst || (eatFirst = () => {});

    // womBlock.locator = (value, index) => {
    //     console.log('OKKKKKKKKKKKKK', {value, index});
    //     return startSeq({ value, index });
    // };
    // womBlock.notInBlock = true;
    return womBlock;
    function womBlock(eat, value, silent) {
        const ctx = Ctx.gen(eat, value);

        // console.log({ctx, value, silent, q: startSeq(ctx)});
        // console.log('YEAH', {value, silent}, startSeq(ctx));
        if (startSeq(ctx) !== ctx.index) {
            return;
        }
        if (silent) {
            return true;
        }

        ctx.cut(startSeqLen);

        const props = eatFirst.call(this, ctx);

        const lastIndex = endSeq(ctx);

        const inner = ctx.cut(lastIndex - ctx.index, isWS);

        ctx.cut(endSeqLen);

        const now = eat.now();
        now.column += startSeqLen;
        now.offset += startSeqLen;

        const add = ctx.chew();

        // console.log({ inner, ...ctx, w: ctx.value.slice(0, ctx.index) });

        // console.log({ queue, index, });

        // console.log(queue, ctx);

        const contentProps = {};

        if (rawContents) {
            contentProps.value = inner;
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

    womInlinePaired.locator = (value, fromIndex) => value.indexOf(charPair, fromIndex);

    function findTheEnd(value, i) {
        let res = value.indexOf(charPair, i);
        if (res === -1) return -1;

        const lineBreak = value.indexOf('\n', i + 1);
        let nextWhitespace = res;
        while (!isWS(value.charAt(nextWhitespace + 1)) && nextWhitespace < value.length) {
            nextWhitespace += 1;
        }

        while(true) {
            const nextPair = value.indexOf(charPair, i + 1);
            if (nextPair === -1 || nextPair > nextWhitespace) {
                break;
            }
            i = nextPair;
        }

        if (lineBreak !== -1 && lineBreak < i) {
            return -1;
        }

        return i;
    }

    function womInlinePaired(eat, value, silent) {
        const nextPair = findTheEnd(value, 2);

        if (nextPair === -1 || value.charCodeAt(0) !== firstCharCode || value.indexOf(charPair) !== 0) {
            return false;
        }

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

        return eat(outer)({
            type,
            ...dye,
            children: this.tokenizeInline(inner, now)
        });
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

    const keyValueRE = /([a-z]\w+)(?:=\s*('[^']+'|"[^"]+"|[^\s\)]+))?\s*/;
    const chunks = [];
    let i = index + 1;
    while (i < value.length) {
        const kvm = value.slice(i).match(keyValueRE);

        let q = ctx.lookAhead(ch => ch === '=');

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

    return {
        format,
        attributes: chunks.reduce((res, { name, value }) => {
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

const remark = require('remark');

// Tmp
const processor = remark().use(plugin);
const x = v => processor.parse(v);

exports.parse = x;
