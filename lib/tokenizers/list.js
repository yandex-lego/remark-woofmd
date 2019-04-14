'use strict';

/* eslint-disable max-params no-var */
/* eslint-disable no-var */

var trim = require('trim');
var repeat = require('repeat-string');
var decimal = require('is-decimal');
var getIndent = require('remark-parse/lib/util/get-indentation');
var removeIndent = require('remark-parse/lib/util/remove-indentation');
var interrupt = require('remark-parse/lib/util/interrupt');

module.exports = list;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_PLUS = '+';
var C_DASH = '-';
var C_DOT = '.';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_PAREN_CLOSE = ')';
var C_X_LOWER = 'x';
var C_EMPTY = '';

var TAB_SIZE = 4;
var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X|)][ \t]/;
var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
var EXPRESSION_WOM_BULLET = /^([ \t]*)((?:[*+-]|[A-Za-z\d]+[.)])(?:[#№]\d+)?\+?)( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_AFTER_BULLET = /^(\+)?([^\n]+)?(\n[ \t]*[*+-\d])?/;
var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;
var EXPRESSION_GAP_BULLET = /^[#№](\d+)/;

/* Map of characters which can be used to mark
 * list-items. */
var LIST_UNORDERED_MARKERS = {};

LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
LIST_UNORDERED_MARKERS[C_PLUS] = true;
LIST_UNORDERED_MARKERS[C_DASH] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_MARKERS = {};

LIST_ORDERED_MARKERS[C_DOT] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_COMMONMARK_MARKERS = {};

LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;

function list(eat, value, silent) {
    var self = this;
    var commonmark = self.options.commonmark;
    var pedantic = self.options.pedantic;
    var wom = self.options.wom || true;
    var tokenizers = self.blockTokenizers;
    var interuptors = self.interruptList;
    var markers;
    var index = 0;
    var length = value.length;
    var start = null;
    var size = 0;
    var queue;
    var ordered;
    var styleType;
    var character;
    var marker;
    var nextIndex;
    var startIndex;
    var prefixed;
    var currentMarker;
    var content;
    var line;
    var prevEmpty;
    var empty;
    var items;
    var allLines;
    var emptyLines;
    var item;
    var enterTop;
    var exitBlockquote;
    var isLoose;
    var node;
    var now;
    var end;
    var indented;
    var expandable;
    var restart;

    while (index < length) {
        character = value.charAt(index);

        if (character === C_TAB) {
            size += TAB_SIZE - (size % TAB_SIZE);
        } else if (character === C_SPACE) {
            size++;
        } else {
            break;
        }

        index++;
    }

    if (size >= TAB_SIZE) {
        return;
    }

    character = value.charAt(index);

    markers = commonmark ?
        LIST_ORDERED_COMMONMARK_MARKERS :
        LIST_ORDERED_MARKERS;

    if (LIST_UNORDERED_MARKERS[character] === true) {
        marker = character;
        ordered = false;
    } else {
        ordered = true;
        queue = '';

        while (index < length) {
            character = value.charAt(index);

            if (!decimal(character)) {
                break;
            }

            queue += character;
            index++;
        }

        if (wom) {
            if (queue) {
                styleType = 'decimal';
            } else {
                if (character === 'i') {
                    styleType = 'lower-roman';
                    queue += character;
                    index++;
                } else if (character === 'I') {
                    styleType = 'upper-roman';
                    queue += character;
                    index++;
                } else if (/[a-z]/.test(character)) {
                    styleType = 'lower-alpha';
                    queue += character;
                    index++;
                } else if (/[A-Z]/.test(character)) {
                    styleType = 'upper-alpha';
                    queue += character;
                    index++;
                }
            }
        }

        character = value.charAt(index);

        if (!queue || markers[character] !== true) {
            return;
        }

        if (wom) {
            if (styleType === 'decimal') {
                start = parseInt(queue, 10);
            }

            if (styleType === 'lower-alpha') {
                start = queue.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            }

            if (styleType === 'upper-alpha') {
                start = queue.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            }

            if (styleType === 'upper-roman' || styleType === 'lower-roman') {
                start = 1;
            }
        } else {
            start = parseInt(queue, 10);
        }

        marker = character;
    }

    index++;

    var gapBullet;
    if (wom) {
        //1.#8
        gapBullet = value.slice(index).match(EXPRESSION_GAP_BULLET);
        if (ordered && gapBullet) {
            index += gapBullet[0].length;
        }

        character = value.charAt(index);

        //1.+
        if (character === C_PLUS) {
            index++;
        }
    }

    character = value.charAt(index);
    if (
        character !== C_SPACE &&
        character !== C_TAB &&
        (!commonmark || (character !== C_NEWLINE && character !== C_EMPTY))
    ) {
        return;
    }

    var signsAloneMatch = value.slice(index).match(EXPRESSION_AFTER_BULLET);
    if (!signsAloneMatch
        || (!signsAloneMatch[1]
            && !(signsAloneMatch[2] && signsAloneMatch[2].trim())
            && !(signsAloneMatch[3] && signsAloneMatch[3].trim()))
    ) {
        return;
    }

    if (silent) {
        return true;
    }

    index = 0;
    items = [];
    allLines = [];
    emptyLines = [];

    while (index < length) {
        nextIndex = value.indexOf(C_NEWLINE, index);
        startIndex = index;
        prefixed = false;
        indented = false;
        expandable = false;
        restart = null;

        if (nextIndex === -1) {
            nextIndex = length;
        }

        end = index + TAB_SIZE;
        size = 0;

        while (index < length) {
            character = value.charAt(index);

            if (character === C_TAB) {
                size += TAB_SIZE - (size % TAB_SIZE);
            } else if (character === C_SPACE) {
                size++;
            } else {
                break;
            }

            index++;
        }

        if (size >= TAB_SIZE) {
            indented = true;
        }

        if (item && size >= item.indent) {
            indented = true;
        }

        character = value.charAt(index);
        currentMarker = null;

        if (!indented) {
            if (LIST_UNORDERED_MARKERS[character] === true) {
                currentMarker = character;
                index++;
                size++;
            } else {
                queue = '';

                while (index < length) {
                    character = value.charAt(index);

                    if (!decimal(character)) {
                        break;
                    }

                    queue += character;
                    index++;
                }

                if (wom) {
                    if (!queue && /[a-zA-Z]/.test(character)) {
                        queue += character;
                        index++;
                    }
                }

                character = value.charAt(index);
                index++;

                if (queue && markers[character] === true) {
                    currentMarker = character;
                    size += queue.length + 1;
                }
            }

            if (currentMarker) {
                character = value.charAt(index);

                if (wom) {
                    gapBullet = value.slice(index).match(EXPRESSION_GAP_BULLET);
                    if (markers[currentMarker] && gapBullet) {
                        restart = parseInt(gapBullet[1], 10);
                        index += gapBullet[0].length;
                        size += gapBullet[0].length;
                    }

                    character = value.charAt(index);

                    if (character === C_PLUS) {
                        expandable = true;
                        index++;
                        size++;

                        character = value.charAt(index);
                    }
                }

                if (character === C_TAB) {
                    size += TAB_SIZE - (size % TAB_SIZE);
                    index++;
                } else if (character === C_SPACE) {
                    end = index + TAB_SIZE;

                    while (index < end) {
                        if (value.charAt(index) !== C_SPACE) {
                            break;
                        }

                        index++;
                        size++;
                    }

                    if (index === end && value.charAt(index) === C_SPACE) {
                        index -= TAB_SIZE - 1;
                        size -= TAB_SIZE - 1;
                    }
                } else if (character !== C_NEWLINE && character !== '') {
                    currentMarker = null;
                }
            }
        }

        if (currentMarker) {
            if (!pedantic && marker !== currentMarker) {
                break;
            }

            prefixed = true;
        } else {
            if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
                indented = true;
            } else if (commonmark && item) {
                indented = size >= item.indent || size > TAB_SIZE;
            }

            prefixed = false;
            index = startIndex;
        }

        line = value.slice(startIndex, nextIndex);
        content = startIndex === index ? line : value.slice(index, nextIndex);

        if (
            currentMarker === C_ASTERISK ||
            currentMarker === C_UNDERSCORE ||
            currentMarker === C_DASH
        ) {
            if (tokenizers.thematicBreak.call(self, eat, line, true)) {
                break;
            }
        }

        prevEmpty = empty;
        empty = !trim(content).length;

        if (indented && item) {
            item.value = item.value.concat(emptyLines, line);
            allLines = allLines.concat(emptyLines, line);
            emptyLines = [];
        } else if (prefixed) {
            if (emptyLines.length !== 0) {
                item.value.push('');
                item.trail = emptyLines.concat();
            }

            item = {
                value: [line],
                indent: size,
                trail: []
            };

            if (wom) {
                item.expandable = expandable;
                item.restart = restart;
            }

            items.push(item);
            allLines = allLines.concat(emptyLines, line);
            emptyLines = [];
        } else if (empty) {
            if (prevEmpty) {
                break;
            }

            emptyLines.push(line);
        } else {
            if (prevEmpty) {
                break;
            }

            if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
                break;
            }

            item.value = item.value.concat(emptyLines, line);
            allLines = allLines.concat(emptyLines, line);
            emptyLines = [];
        }

        index = nextIndex + 1;
    }

    node = eat(allLines.join(C_NEWLINE)).reset({
        type: 'list',
        ordered: ordered,
        styleType: styleType,
        start: start,
        loose: null,
        children: []
    });

    enterTop = self.enterList();
    exitBlockquote = self.enterBlock();
    isLoose = false;
    index = -1;
    length = items.length;

    while (++index < length) {
        item = items[index];

        item.string = item.value.join(C_NEWLINE);
        now = eat.now();

        item = eat(item.string)(listItem(self, item, now, wom), node);

        if (item.loose) {
            isLoose = true;
        }

        item = items[index].trail.join(C_NEWLINE);

        if (index !== length - 1) {
            item += C_NEWLINE;
        }

        eat(item);
    }

    enterTop();
    exitBlockquote();

    node.loose = isLoose;

    return node;
}

function listItem(ctx, item, position, wom) {
    var offsets = ctx.offset;
    var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
    var checked = null;
    var task;
    var indent;
    var title = null;

    var value = fn.apply(null, [ctx, item.string, position, wom]);

    if (ctx.options.gfm) {
        task = value.match(EXPRESSION_TASK_ITEM);

        if (task) {
            indent = task[0].length;
            checked = task[1].toLowerCase() === C_X_LOWER;
            offsets[position.line] += indent;
            value = value.slice(indent);
        }
    }

    if (item.expandable) {
        let newLineIndex = value.indexOf(C_NEWLINE);
        if (newLineIndex === -1) {
            newLineIndex = value.length;
        }
        title = value.slice(0, newLineIndex);
        value = value.slice(newLineIndex + 1);
        item.title = ctx.tokenizeBlock(title, position);

        if (value) {
            position.line++;
            position.column = 1;
        }
    }

    return {
        type: 'listItem',
        loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) ||
            value.charAt(value.length - 1) === C_NEWLINE,
        checked: checked,
        expandable: item.expandable,
        title: item.title,
        restart: item.restart,
        children: ctx.tokenizeBlock(value, position)
    };
}

/* Create a list-item using overly simple mechanics. */
function pedanticListItem(ctx, value, position) {
    var offsets = ctx.offset;
    var line = position.line;

    /* Remove the list-item’s bullet. */
    value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);

    /* The initial line was also matched by the below, so
     * we reset the `line`. */
    line = position.line;

    return value.replace(EXPRESSION_INITIAL_INDENT, replacer);

    /* A simple replacer which removed all matches,
     * and adds their length to `offset`. */
    function replacer($0) {
        offsets[line] = (offsets[line] || 0) + $0.length;
        line++;

        return '';
    }
}

/* Create a list-item using sane mechanics. */
function normalListItem(ctx, value, position, wom) {
    var offsets = ctx.offset;
    var line = position.line;
    var max;
    var bullet;
    var rest;
    var lines;
    var trimmedLines;
    var index;
    var length;

    /* Remove the list-item’s bullet. */
    bullet = wom ? EXPRESSION_WOM_BULLET : EXPRESSION_BULLET;
    value = value.replace(bullet, replacer);

    lines = value.split(C_NEWLINE);

    trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);

    /* We replaced the initial bullet with something
     * else above, which was used to trick
     * `removeIndentation` into removing some more
     * characters when possible.  However, that could
     * result in the initial line to be stripped more
     * than it should be. */
    trimmedLines[0] = rest;

    offsets[line] = (offsets[line] || 0) + bullet.length;
    line++;

    index = 0;
    length = lines.length;

    while (++index < length) {
        offsets[line] = (offsets[line] || 0) +
            lines[index].length - trimmedLines[index].length;
        line++;
    }

    return trimmedLines.join(C_NEWLINE);

    function replacer($0, $1, $2, $3, $4) {
        bullet = $1 + $2 + $3;
        rest = $4;

        /* Make sure that the first nine numbered list items
         * can indent with an extra space.  That is, when
         * the bullet did not receive an extra final space. */
        if (Number($2) < 10 && bullet.length % 2 === 1) {
            $2 = C_SPACE + $2;
        }

        max = $1 + repeat(C_SPACE, $2.length) + $3;

        return max + rest;
    }
}
