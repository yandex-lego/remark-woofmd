'use strict';

const DEBUG = /womTable/.test(process.env.DEBUG || '');

const {
    CH_HASH,
    CH_PIPE,
    CH_TILDE,
    CH_BACKSLASH,
    CH_QUOTE
} = require('../utils/charcodes');

const { isWS } = require('../utils/char-test');

// States
const S_EXT    = 1; // External
const S_TABLE  = 2;
const S_LAYOUT = 3;
const S_ROW    = 4;
const S_CELL = 5;
const S_ESCSEQ = 6;
const S_ESCSEQ_TILDE = 7;

const stateName = (n) => [
    null,
    'S_EXT',
    'S_TABLE',
    'S_LAYOUT',
    'S_ROW',
    'S_CELL',
    'S_ESCSEQ',
    'S_ESCSEQ_TILDE'
][n] || 'S_WTF';

womTable.locator = (value, fromIndex) => value.indexOf('#|', fromIndex);
function womTable(eat, value, silent) {
    // Skip WS characters
    const valueLength = value.length;
    let i = 0;
    while (i < valueLength) {
        const charCode = value.charCodeAt(i);
        if (isWS(charCode)) {
            i += 1;
            continue;
        }
        break;
    }

    // ... early return if nothing found
    if (value.charCodeAt(i) !== CH_HASH || value.charCodeAt(i + 1) !== CH_PIPE) {
        return false;
    }

    let resultingTable = null;
    {
        let stateStack = [];
        let state;
        let node = null;
        let lastRow;
        let lastTable;

        const makeStateEntry = (_state, handler) => {
            const stateEntry = [_state, i, handler, null];
            if (_state === S_TABLE || _state === S_LAYOUT) {
                stateEntry[3] = lastTable = node = { rows: [], parent: node, state: stateEntry };
            }
            if (_state === S_ROW) {
                stateEntry[3] = lastRow = { range: null, table: node, cells: [] };
                node.rows.push(lastRow);
            }
            if (_state === S_CELL) {
                stateEntry[3] = lastRow;
            }
            return stateEntry;
        };

        const push = (_state, handler) => {
            stateStack.push(makeStateEntry(_state, handler));
            state = _state;
        };

        const pop = () => {
            if (!stateStack.length) {
                return null;
            }

            const stateEntry = stateStack.pop();
            const [ localState, localI, handler, stateNode ] = stateEntry;

            // Restore state
            const prevStateEntry = stateStack[stateStack.length - 1] || [];
            state = prevStateEntry[0] || null;
            node = prevStateEntry[3] || null;
            node && node.table && (lastTable = node.table);
            lastTable && (lastRow = lastTable.rows[lastTable.rows.length - 1]);
            
            DEBUG && console.log('RESTORE', `${stateName(localState)}→${stateName(state)}`.padEnd(8), { node: node, stateNode, lastRow });

            if (handler) {
                handler(stateEntry, stateNode);
            }

            return stateEntry;
        };

        const cellHandler = (stateData, row) => {
            DEBUG && console.log('PUSHING CELL', [stateData[1], i], 'TO', row.cells)
            row.cells.push({
                range: [stateData[1], i]
            });
            DEBUG && console.log('RESULTING CELLS', row.cells);
        };

        const rowHandler = (stateData, row) => {
            row.range = [stateData[1], i];
            DEBUG && console.log('MARKING ROW', row);
        };

        const onEnd = (attrs = {}) => (stateData, tableNode) => {
            if (!tableNode.rows.length) {
                return;
            }

            if (!tableNode.parent) {
                resultingTable = tableNode;
            }

            const localState = stateData[0];
            if (localState === S_TABLE || localState === S_LAYOUT) {
                const ending = localState === S_LAYOUT ? 3 : 2;
                tableNode.range = [stateData[1], i - 1 + ending];
                tableNode.attrs = attrs;
            }
        };

        const tableHandler = onEnd();
        const layoutHandler = onEnd({ kind: 'layout' });

        const dumpState = () => {
            const q = (x) => x.replace(/\n/g, '↵');
            console.log(stateName(state).padEnd(8), String(i).padStart(2), JSON.stringify(q(value)).slice(1, -1).padEnd(80).slice(i, 80).padEnd(80), q(value.slice(i, i + 2)));
        };

        const calculatePipes = (string, offset) => {
            let charCode;
            let pipes = 0;

            do {
                if (pipes > 10) {
                    return;
                }

                pipes += 1;
                charCode = string.charCodeAt(offset + pipes);
            } while (charCode === CH_PIPE);

            return pipes;
        };

        push(S_EXT);
        while (i < valueLength && !resultingTable) {

            // Skip whitespaces
            while (isWS(value.charCodeAt(i))) {
                i += 1;
                continue;
            }

            const ch = value.charCodeAt(i);
            const ch1 = value.charCodeAt(i + 1);

            DEBUG && dumpState();

            switch (state) {
                case S_ROW:
                    // Should never happen
                    throw new Error('Unacceptable !!!!! 🍋');

                // #| ||cell11||| ||cell21|| |#
                //      ↑
                case S_CELL:
                    // Waiting for | or ||, anything else are unexpected here
                    // |…
                    if (ch === CH_PIPE) {
                        let pipes = calculatePipes(value, i);
                        const charCodeAfterPipes = value.charCodeAt(i + pipes);

                        // Prevent troubles if the last
                        if (charCodeAfterPipes === CH_HASH) {
                            const isLayout = lastTable.state[0] === S_LAYOUT;

                            // Cut out closing pipes: 1 for |# and 2 for ||#
                            pipes -= isLayout ? 2 : 1;

                            // Should we immediately close row and table for #, |#, ||# ?
                            if (pipes <= 0) {
                                // TODO: report trouble
                                pop(); // CELL
                                pop(); // ROW
                                i += 1;
                                pop(); // TABLE | LAYOUT

                                // If not nested
                                if (stateStack.length === 1) {
                                    return false;
                                }

                                break;
                            }
                        }

                        // moving to the next cell if
                        // …|||||…, …|||…, …|… (1, 3, 5, 7, …)
                        if (pipes % 2) {
                            pop(); // CELL
                            i += 1;
                            push(S_CELL, cellHandler);
                            i -= 1;

                        // finishing current row if
                        // …||||||…, …||… (2, 6, 10, …)
                        // …||||||||…, …||||… (4, 8, 12, …)
                        } else {
                            pop(); // CELL
                            i += 2;
                            pop(); // ROW
                            i -= 1;
                        }

                        break;
                    }
                    // Fallback to S_EXT

                // #| ||cell11|| ||cell21|| |#
                // #|||cell11||||cell21|||#
                // ↑
                case S_EXT:
                    if (ch === CH_TILDE || ch === CH_BACKSLASH) {
                        push(S_ESCSEQ_TILDE);
                        i -= 1;
                    } else if (ch === CH_QUOTE && ch1 === CH_QUOTE) {
                        push(S_ESCSEQ);
                        i += 1;
                    } else if (ch === CH_HASH && ch1 === CH_PIPE) {
                        const pipes = calculatePipes(value, i + 1);

                        // #| #||| #||||| …
                        if (pipes % 2) {
                            push(S_TABLE, tableHandler);
                            i += 1;

                        // #|| #|||| #|||||| …
                        } else {
                            push(S_LAYOUT, layoutHandler);
                            i += 2;
                        }
                    }

                    break;

                // #| ||cell11|| ||cell21|| |#
                //   ↑    — Between #| and |# or #|| and ||#
                case S_LAYOUT:
                case S_TABLE:
                    const ch2 = value.charCodeAt(i + 2);

                    // |# or ||# - closing row and table
                    if (ch === CH_PIPE
                        && (
                            /*state === S_TABLE &&*/ ch1 === CH_HASH
                            || /*state === S_LAYOUT &&*/ ch1 === CH_PIPE && ch2 === CH_HASH)
                        ) {
                        i += 1;
                        pop(); // TABLE | LAYOUT

                    } else if (ch === CH_PIPE && ch1 === CH_PIPE) {
                        push(S_ROW, rowHandler);
                        i += 2;
                        push(S_CELL, cellHandler);
                        i -= 1;

                    }
                    break;

                case S_ESCSEQ:
                    if (ch === CH_QUOTE && ch1 === CH_QUOTE) {
                        pop();
                        i += 1;
                    }
                    break;
                case S_ESCSEQ_TILDE:
                    if (isWS(ch1)) {
                        pop();
                    }
                    break;
            }

            i += 1;
        }
    }

    if (!resultingTable) {
        return;
    }

    if (silent) {
        return true;
    }

    const baseOffset = eat.now().offset;
    const dumpMarkers = (range, eatcut = 'CHW') => {
        const eaterOffset = eat.now().offset - baseOffset + 1; // Because of " (JSON.stringify (broken for \n etc))
        const pref = `→${eatcut} ${String(resultingTable.range).padEnd(8)}`;
        const ssss = ''.padEnd(pref.length);
        console.log(pref, JSON.stringify(value.replace(/\n/g, '↵')));
        const res = ''.padStart(range[0] + 1) + (''.padEnd(range[1] - range[0]).replace(/\s/g, '-'));
        console.log(ssss, res.slice(0, eaterOffset ? eaterOffset : 0) + 'ѳ' + res.slice(eaterOffset + 1));
    };

    DEBUG && console.log('RESULTING TABLE', require('util').inspect(resultingTable, { depth: null }));

    let prevOffset;
    const slice = ({ range }) => String.prototype.slice.apply(value, range);
    const eatRange = ({ range }, prev) => {
        DEBUG && dumpMarkers(range, 'EAT');
        prev && (prevOffset = range[1]);
        return eat(slice({ range }));
    };
    const cut = (offset1, offset2) => {
        offset1 === null && (offset1 = prevOffset);
        prevOffset = offset2;
        DEBUG && dumpMarkers([offset1, offset2], 'CUT');
        return eat(value.slice(offset1, offset2));
    };

    const tableInnerRange = [
        resultingTable.rows[0].range[0],
        resultingTable.rows[resultingTable.rows.length-1].range[1]
    ];

    // Eating spaces
    cut(0, resultingTable.range[0]);

    const table = eatRange(resultingTable).reset({
        type: 'womTable',
        ...resultingTable.attrs,
        children: []
    });

    // Eating #| or #||
    cut(resultingTable.range[0], tableInnerRange[0]);

    {
        const exit = this.enterBlock();

        let i = 0; // eslint-disable-line
        while (i < resultingTable.rows.length) {
            const row_ = resultingTable.rows[i];
            const nextRow_ = resultingTable.rows[i + 1];

            const row = eatRange(row_).reset({
                type: 'womTableRow',
                children: []
            }, table);

            // Eating || at line beginning
            cut(null, row_.cells[0].range[0]);

            let j = 0;
            DEBUG && console.log('GOING TO EAT CELLS', row_);
            while (j < row_.cells.length) {
                const cell_ = row_.cells[j];
                const nextCell_ = row_.cells[j + 1];

                const sliced = slice(cell_); // TODO: Make innerRange for cells?

                eatRange(cell_, true)({
                    type: 'womTableCell',
                    children: this.tokenizeBlock(sliced, eat.now())
                }, row);

                // Eating |
                if (nextCell_) {
                    DEBUG && console.log('EATING NEXT CELL', [cell_.range[1], nextCell_.range[0]]);
                    cut(cell_.range[1], nextCell_.range[0]);
                }

                j += 1;
            }

            // Eating || at line ending
            DEBUG && console.log('EATING THE REST OF ROW', { nextRow_, row_ });
            cut(null, nextRow_ ? nextRow_.range[0] : row_.range[1]);

            i += 1;
        }

        // Eating |# or ||#
        DEBUG && console.log('EATING END OF TABLE', [tableInnerRange[1], resultingTable.range[1]]);
        cut(tableInnerRange[1], resultingTable.range[1]);

        exit();
    }

    return table;
}

module.exports = womTable;
