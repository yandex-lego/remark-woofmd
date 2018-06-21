'use strict';

module.exports = womHeading;

const C_NEWLINE = '\n';
const C_TAB = '\t';
const C_SPACE = ' ';
const C_EQUAL = '=';
const C_PLUS = '+';

const MAX_DEPTH = 6;

const not = (fn) => (...args) => !fn(...args);
const isEqual = ch => ch === C_EQUAL;
const isWS = ch => ch === C_SPACE || ch === C_TAB;
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

  if (depth < 1 || depth > MAX_DEPTH ||
    (!isPedantic && value.charAt(index) === C_EQUAL)) {
    return;
  }

  let expandable = false;
  if (value.charAt(index) === C_PLUS) {
    expandable = true;
    queue += C_PLUS;
    index += 1;
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
  // console.log({ subvalue, content, queue });

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  return eat(subvalue)({
    type: 'womHeading',
    depth,
    expandable,
    children: this.tokenizeInline(content, now)
  });
}
