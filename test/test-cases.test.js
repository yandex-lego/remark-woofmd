const { readFileSync } = require('fs');

const safeEval = require('node-eval');
const vis = require('../utils').vis;
const { describe, it } = require('mocha');
const { expect, use } = require('chai');
use(require('chai-subset'));

const content = readFileSync('./test-cases.md', 'utf-8');

const remark = require('remark');
const woofmd = require('..');
const processor = remark().data('settings', { commonmark: true, footnotes: true }).use(woofmd.remark);
const parseMd = v => processor.parse(v);

for (const [group, subjs] of groupUp(parseCases(content))) {
    describe(group, () => {
        for (const subj of subjs) {
            // if (subj.tokens) {
            //     it('Tokens for ' + subj.title, () => {
            //         console.log(subj.tokens, Array.from(tokens.lexer.reset(subj.input)).map(x => x.type).join(' '));
            //     });
            //     // continue;
            // } else {
            //     continue;
            // }
            // {title, input, tokens, output, valid: null, line: lineNumber}

            if (!subj.valid) {
                it(subj.title + ' : ' + JSON.stringify(subj.error));
                continue;
            }

            (subj.skip ? it.skip : it)(subj.title, function () {
                const rawExpected = subj.expected();
                if (rawExpected === null) {
                    return this.skip();
                }

                const expected = buildup(rawExpected);
                const actual = parseMd(subj.input);
                traverse(actual, x => { delete x.position; });

                expect(vis(actual)).to.equal(vis(expected));
                // process.exit();
            });
        }
    });
}

// const invalidCases = cases.filter(x => x.valid === false);

// invalidCases.length && console.error(invalidCases);
// console.log(cases);

function buildup(obj) {
    if (obj === null) {
        return null;
    }
    // if (Array.isArray(obj)) {
        // obj = {type: obj[0].type === 'paragraph' ? 'root' : 'paragraph', children: obj};
    // }
    if (obj.type !== 'paragraph' && obj.type !== 'root') {
        obj = {type: 'paragraph', children: [].concat(obj)};
    }
    if (obj.type === 'paragraph') {
        obj = {type: 'root', children: [].concat(obj)};
    }
    return obj;
}

function groupUp(cases) {
    const groupped = new Map();
    for (const subj of cases) {
        const key = subj.group || '.';
        groupped.has(key) || groupped.set(key, []);
        groupped.get(key).push(subj);
    }
    return groupped;
}

function* parseCases(s) {
    // TODO: read lines one by one?
    const lines = s.split('\n');

    let group = null;
    let cursor = null, lineNumber;
    const cases = [];
    let state = 0; // enum: { none, title, input, output }
    for (lineNumber = 0; lineNumber < lines.length; lineNumber++) {
        const line = lines[lineNumber];
        if (!line || line.startsWith('// ') || line === '//') {
            if (state === 3) {
                yield* reset();
            }
            continue;
        }

        if (line.startsWith('## ')) {
            group = line.slice(3).trim();
            if (!group) throw new Error('Empty heading');
            continue;
        }

        // legend:
        // ## group
        //   〉 — title
        //   ← — input
        //   →  — expectation
        if (line.startsWith('〉')) {
            yield* reset();

            cursor = newCase(line.slice(1).trim());

        } else if (line.startsWith('←')) {
            if (state > 2) {
                yield* reset();
            }
            if (cursor === null) {
                cursor = newCase(line.slice(1).trim());
            }

            state = 2;
            cursor.input += line.slice(1) + '\n';

        } else if (line.startsWith('↑')) {
            state = 3;
            cursor.tokens || (cursor.tokens = '');
            cursor.tokens += line.slice(1).trim() + '\n';

        } else if (line.startsWith('→')) {
            state = 3;
            cursor.output += line.slice(1).trim() + '\n';

        } else if (line.includes('→')) {
            yield* reset();

            cursor = newCase(...parseLine(line));
        }
    }

    yield* reset();

    return cases;

    function reset() {
        const res = [];
        state = 1;
        cursor && (validateCase(cursor), res.push(cursor));
        cursor = null;
        return res;
    }

    function validateCase(subject) {
        if (!subject || subject.valid !== null) {
            return;
        }
        subject.valid = true;

        try {
            if (!subject.output.trim()) {
                subject.expected = () => { throw new Error('Empty expectation'); };
            } else {
                subject.expected = () => safeEval('module.exports = ' + subject.output.trim());
            }
        } catch(e) {
            subject.valid = false;
            subject.error = { error: e, code: lines.slice(subject.line, lineNumber).join('\n') };
        }
    }

    function parseLine(line) {
        let [input, output] = line.split('→');
        input = input.trim();
        output = output.trim();
        return [input, input, null, output];
    }

    function newCase(title, input = '', tokens = '', output = '') {
        const skip = String(title).indexOf('¡ ') === 0;
        skip && (title = title.slice(2));
        const newCase_ = {group, title, skip, input, tokens, output, valid: null, line: lineNumber};
        cases.push(newCase_);
        return newCase_;
    }
}

function traverse(obj, fn) {
    if (Array.isArray(obj)) {
        for (const item of obj) {
            traverse(item, fn);
        }
    } else if (typeof obj === 'object') {
        fn(obj);
        for (const k of Object.keys(obj)) {
            Array.isArray(obj[k]) && traverse(obj[k], fn);
        }
    }
}
