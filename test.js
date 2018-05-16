const { readFileSync } = require('fs');

const safeEval = require('node-eval');
const vis = require('./utils').vis;
const { describe, it } = require('mocha');
const { expect, use } = require('chai');
use(require('chai-subset'));

const content = readFileSync('./test-cases.md', 'utf-8');

const parseMd = require('.').parse;
const tokens = require('./tokens');

describe('test-cases', () => {
    for (const subj of parseCases(content)) {
        // if (subj.tokens) {
        //     it('Tokens for ' + subj.title, () => {
        //         console.log(subj.tokens, Array.from(tokens.lexer.reset(subj.input)).map(x => x.type).join(' '));
        //     });
        //     // continue;
        // } else {
        //     continue;
        // }
        // {title, input, tokens, output, valid: null, line: lineNumber}
        if (subj.valid) {
            it(subj.title, () => {
                const expected = buildup(subj.expected());
                const actual = parseMd(subj.input);
                traverse(actual, x => { delete x.position; });

                expect(vis(actual)).to.equal(vis(expected));
                // process.exit();
            });
        } else {
            it(subj.title + ' : ' + JSON.stringify(subj.error));
        }
    }
});

// const invalidCases = cases.filter(x => x.valid === false);

// invalidCases.length && console.error(invalidCases);
// console.log(cases);

function buildup(obj) {
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

function* parseCases(content) {
    // TODO: read lines one by one?
    const lines = content.split('\n');

    let cursor = null, lineNumber;
    const cases = [];
    let state = 0; // enum: { none, title, input, output }
    for (lineNumber = 0; lineNumber < lines.length; lineNumber++) {
        const line = lines[lineNumber];
        if (!line || line.startsWith('// ') || line === '//') {
            if (state = 3) {
                yield* reset();
            }
            continue;
        }

        // legend:
        //   〉 — title
        //   ← — input
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
        if (!subject || subject.valid !== null) return;
        subject.valid = true;

        try {
            subject.expected = () => safeEval('module.exports = ' + subject.output);
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
        const newCase = {title, input, tokens, output, valid: null, line: lineNumber};
        cases.push(newCase);
        return newCase;
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
