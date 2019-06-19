'use strict';

module.exports = womHeading;

const C_NEWLINE = '\n';
const C_TAB = '\t';
const C_SPACE = ' ';
const C_EQUAL = '=';
const C_PLUS = '+';
const C_OPENING_BRACE = '(';
const C_CLOSING_BRACE = ')';

const MAX_DEPTH = 6;

const not = (fn) => (...args) => !fn(...args);
const isEqual = ch => ch === C_EQUAL;
const isWS = ch => ch === C_SPACE || ch === C_TAB;
const isClosingBrace = ch => ch === C_CLOSING_BRACE;
const isOpeningBrace = ch => ch === C_OPENING_BRACE;
const isNotWS = not(isWS);
const isNotEqual = not(isEqual);

function lookAhead(value, test, offset) {
    const l = value.length;
    let i = offset === null ? this.index : offset;
    while (i < l && !test(value.charAt(i))) {
        i += 1;
    }
    return i;
}

/**
 * Look ahead for closing brace, counting opening in the way
 * @param {string} value
 * @param {number} offset
 * @returns {number}
 */
function lookAheadClosingBrace(value, offset) {
  let openCount = 0;
  const l = value.length;
  let i = offset === null ? this.index : offset;

  while (i < l) {
    if (isOpeningBrace(value.charAt(i))) {
      openCount++;
    }

    if (isClosingBrace(value.charAt(i))) {
      openCount--;

      if (openCount < 0) {
        return i;
      }
    }
    i += 1;
  }

  return i;
}

function womHeading(eat, value, silent) {
  const isPedantic = this.options.pedantic;
  const now = eat.now();

  let length = value.length + 1;
  let index = 0;
  let nextIndex;

  let subvalue = '';
  let content = '';
  let character;
  let queue;

  /* Eat initial spacing. */
  index = lookAhead(value, isNotWS, index);

  /* Eat equals. */
  nextIndex = lookAhead(value, isNotEqual, index);
  queue = value.slice(index, nextIndex);
  const depth = nextIndex - index - 1;
  index = nextIndex;

  character = value.charAt(index)
  if (depth < 1 || depth > MAX_DEPTH ||
    (!isPedantic && character === C_EQUAL)) {
    return;
  }

  // ==+
  let expandable = false;
  if (character === C_PLUS) {
    expandable = true;
    index += 1;
    character = value.charAt(index);
  }

  // ==(something)
  // ==+(something)
  // links are not anchor ==((something))
  let anchor = null;
  if (character === C_OPENING_BRACE && value.charAt(index + 1) !== C_OPENING_BRACE) {
    nextIndex = lookAheadClosingBrace(value, index + 1);
    if (nextIndex !== -1) {
      anchor = value.slice(index + 1, nextIndex);
      index = nextIndex + 1;
    }
  }

  length = value.length + 1;

  /* Eat intermediate white-space. */
  nextIndex = lookAhead(value, isNotWS, index);
  queue = value.slice(0, nextIndex);
  index = nextIndex;

  /* Exit when not in pedantic mode without spacing. */
  if (
    !isPedantic &&
    queue.length === 0 &&
    character &&
    character !== C_NEWLINE
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  /* Eat content. */
  subvalue += queue;
  queue = '';
  content = '';

  index--;
  while (++index < length) {
    character = value.charAt(index);

    if (!character || character === C_NEWLINE) {
      break;
    }

    if (!isWS(character) && !isEqual(character)) {
      content += queue + character;
      queue = '';
      continue;
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_EQUAL) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    index--;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  return eat(subvalue)({
    type: 'womHeading',
    depth,
    anchor,
    expandable,
    children: this.tokenizeInline(content, now)
  });
}
