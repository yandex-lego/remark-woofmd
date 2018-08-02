'use strict';

// States
const S_EXT    = 1; // External
const S_TABLE  = 2;
const S_LAYOUT = 3;
const S_ROW    = 4;
const S_CELL   = 5;
const S_ESCSEQ = 6;

const stateName = (n) => [
    null,
    'S_EXT',
    'S_TABLE',
    'S_LAYOUT',
    'S_ROW',
    'S_CELL',
    'S_ESCSEQ',
][n] || 'S_WTF';

// Character codes
const CH_SPACE = 0x20;
const CH_NBSP = 0xA0;
const CH_LINEFEED = 0x0A; // \n
const CH_RETURN = 0x0D; // \r
const CH_PIPE = 124;  // |
const CH_HASH = 35;   // #

// Code check helpers
const isWS = c => c === CH_SPACE || c === CH_NBSP || c === CH_LINEFEED || c === CH_RETURN;
const isNotWS = c => !isWS(c);

function womTable(eat, s, silent) {
    // [CH_HASH, CH_PIPE]
    // [CH_PIPE, CH_PIPE]
    // [CH_PIPE, CH_HASH]

    // Skip WS and non-control characters
    const vl = s.length;
    let i = 0;
    while (i < vl) {
        const ch = s.charCodeAt(i);
        // console.log(ch);
        if (!isWS(ch) && ch !== CH_HASH && ch !== CH_PIPE/* || !isControl(ch)*/) {
            i += 1;
            continue;
        }
        break;
    }

    // ... early return if nothing found
    if (s.charCodeAt(i) !== CH_HASH || s.charCodeAt(i + 1) !== CH_PIPE) {
        return false;
    }
    if (silent) {
        return true;
    }

    let resultingTable = null;
    {
        let stateStack = [];
        let state;
        let node = null;
        let lastRow;
        const makeStateEntry = (_state, handler) => {
            const stateEntry = [_state, i, handler, null];
            if (_state === S_TABLE || _state === S_LAYOUT) {
                stateEntry[3] = node = { rows: [], parent: node, state: stateEntry };
            }
            if (_state === S_ROW) {
                lastRow = { range: null, cells: [] };
                node.rows.push(lastRow);
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
            // if (state === S_TABLE || state === S_LAYOUT) {
            //     node = node && node.parent;
            // }

            const stateEntry = stateStack.pop();
            const [ localState, localI, handler, stateNode ] = stateEntry;

            // console.log('!!!!!!!!!!!!', localState, stateEntry);
            // console.log('POPPED', {
            //     localState: stateName(localState),
            //     range: [localI, i],
            //     slice: s.slice(localI, i),
            //     hasHandler: !!handler,
            //     sameCtx: node === stateNode
            // });
            if (handler) {
                // console.log(node, stateNode);
                handler(stateEntry, node);
            }

            // Restore state
            state = stateStack[stateStack.length - 1][0];

            return [ localState, localI, handler, stateNode ];
        };
        push(S_EXT);

        while (i < vl && !resultingTable) {
            // Skip whitespaces
            while (isWS(s.charCodeAt(i))) {
                i += 1;
                continue;
            }

            const ch = s.charCodeAt(i);
            const ch1 = s.charCodeAt(i + 1);

            // console.log(stateName(state).padEnd(8), String(i).padStart(2), JSON.stringify(s).slice(1, -1).slice(i, 40).padEnd(50), String.fromCharCode(ch, ch1));

            switch (state) {
                case S_ROW:
                    // Should never happen
                    throw new Error('Unacceptable !!!!! 🍋');
                    break;

                // #| ||cell11||| ||cell21|| |#
                //      ↑
                case S_CELL:
                    // Waiting for | or ||, anything else are unexpected here
                    // |…
                    if (ch === CH_PIPE) {
                        const ch2 = s.charCodeAt(i + 2);
                        // || — finishing current row
                        if (ch1 === CH_PIPE && isWS(ch2)) {
                            pop(); // CELL
                            i += 2;
                            pop(); // ROW
                            i -= 1;
                        }

                        // |# - immediately closing row and table
                        else if (ch1 === CH_HASH || (ch1 === CH_PIPE && ch2 === CH_HASH)) {
                            pop(); // CELL
                            pop(); // ROW
                            i += 1;
                            pop(); // TABLE | LAYOUT
                        }

                        // |… — moving to the next cell
                        else {
                            pop();
                            i += 1;
                            push(S_CELL, (stateData, tableNode) => {
                                lastRow.cells.push({
                                    range: [stateData[1]|0, i|0]
                                });
                            });
                            i -= 1;
                        }
                    }
                    // Fallback to S_EXT

                // #| ||cell11|| ||cell21|| |#
                // ↑
                case S_EXT:
                    if (ch === CH_HASH && ch1 === CH_PIPE) {
                        const ch2 = s.charCodeAt(i + 2);
                        const onEnd = (attrs = {}) => (stateData, tableNode) => {
                            resultingTable = tableNode;

                            if (state === S_TABLE || state === S_LAYOUT) {
                                const ending = state === S_LAYOUT ? 3 : 2;
                                tableNode.range = [stateData[1], i + ending];
                                tableNode.attrs = attrs;
                            }
                        };

                        if (isWS(ch2)) {
                            push(S_TABLE, onEnd());
                            i += 1;
                        } else if (ch2 === CH_PIPE && isWS(s.charCodeAt(i + 3))) {
                            push(S_LAYOUT, onEnd({ kind: 'layout' }));
                            i += 2;
                        } else {
                            throw new Error('Something went wrong: #||?');
                        }
                    }
                    break;

                // #| ||cell11|| ||cell21|| |#
                //   ↑    — Between #| and |# or #|| and ||#
                case S_LAYOUT:
                case S_TABLE:
                    const ch2 = s.charCodeAt(i + 2);

                    // |# or ||# - closing row and table
                    if (ch === CH_PIPE
                        && (
                            state === S_TABLE && ch1 === CH_HASH
                            || state === S_LAYOUT && ch1 === CH_PIPE && ch2 === CH_HASH)
                        ) {
                        i += 1;
                        pop(); // TABLE | LAYOUT

                    } else if (ch === CH_PIPE && ch1 === CH_PIPE) {
                        push(S_ROW, (stateData, tableNode) => {
                            lastRow.range = [stateData[1]|0, i|0];
                        });
                        i += 2;
                        push(S_CELL, (stateData, tableNode) => {
                            lastRow.cells.push({
                                range: [stateData[1]|0, i|0]
                            });
                        });
                        i -= 1;


                    } else {
                        throw new Error('Something went wrong!??')
                        // Something went wrong: #||?
                    }
                    break;

                // Just for skipping escapes sequences
                case S_ESCSEQ:
                    if (ch === CH_HASH && ch === CH_PIPE) {
                        push(S_TABLE);
                    }
                    // Breaking on ||
                    else if (chc) {

                    }
                    break;
                // case
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

    const slice = ({ range }) => String.prototype.slice.apply(s, range);
    const eatRange = ({ range }) => eat(slice({ range }));

    const table = eatRange(resultingTable).reset({
        type: 'womTable',
        ...resultingTable.attrs,
        children: []
    });

    const tableInnerRange = [
        resultingTable.rows[0].range[0],
        resultingTable.rows[resultingTable.rows.length-1].range[1]
    ];

    let prevOffset;
    const cut = (offset1, offset2) => {
        offset1 === null && (offset1 = prevOffset);
        // console.log('→→', prevOffset, JSON.stringify(s.slice(offset1, offset2)));
        prevOffset = offset2;
        return eat(s.slice(offset1, offset2));
    };

    // Eating #| or #||
    cut(resultingTable.range[0], tableInnerRange[0]);

    {
        const exit = this.enterBlock();

        let i = 0;
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
            while (j < row_.cells.length) {
                const cell_ = row_.cells[j];
                const nextCell_ = row_.cells[j + 1];

                eatRange(cell_)({
                    type: 'womTableCell',
                    children: this.tokenizeBlock(slice(cell_), eat.now())
                }, row);

                // Eating |
                if (nextCell_) {
                    cut(cell_.range[1], nextCell_.range[0]);
                }

                j += 1;
            }

            // Eating || at line ending
            cut(eat.now().offset, nextRow_ ? nextRow_.range[0] : row_.range[1]);

            i += 1;
        }

        // Eating |# or ||#
        cut(tableInnerRange[1], resultingTable.range[1]);

        exit();
    }

    return table;
}

module.exports = womTable;
