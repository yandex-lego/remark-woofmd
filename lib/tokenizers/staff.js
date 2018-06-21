'use strict';

module.exports = womStaff;

const STAFF_PREFIXES = ['кто:', 'кого:', 'кому:', 'кем:', 'оком:', 'staff:', '@'];
const STAFF_SUFFIXES = ['@'];
const isStaffCharacter = ch => (/[a-z0-9]/i).test(ch);

const not = (fn) => (...args) => !fn(...args);
const isWS = (ch) => ch === '\n' || /\s/.test(ch.charAt(0)) || ch === '';
const isNotWS = not(isWS);

function lookAhead(value, test, offset) {
    const l = value.length;
    let i = offset === null ? this.index : offset;
    while (i < l && !test(value.charAt(i))) {
        i += 1;
    }
    return i;
}

womStaff.locator = (value, index) => {
  if (value.indexOf('@', index) === -1 && value.indexOf(':', index) === -1) {
    return -1;
  }

  const results = [].concat(
    STAFF_PREFIXES.map(prefix => value.indexOf(prefix, index)),
    STAFF_SUFFIXES.map(suffix => {
      let pos = value.indexOf(suffix, index);
      if (isNotWS(value.charAt(pos + 1))) {
        return -1;
      }

      // lookBehind
      while (isStaffCharacter(value.charAt(pos - 1))) {
        pos -= 1;
      }
      if (isNotWS(value.charAt(pos - 1))) {
        return -1;
      }
      return pos;
    })
  );

  const res = Math.min.apply(null, results.map(pos => pos === -1 ? Infinity : pos));
  // console.log('LOCATOR', res);
  return res === Infinity ? -1 : res;
};

function womStaff(eat, value, silent) {
  const now = eat.now();

  let index = lookAhead(value, isNotWS, 0);
  {
    let character = value.charAt(index);
    if (!isStaffCharacter(character) && character !== '@' && character !== 'к' && character !== 'о' && character !== 's') {
      return;
    }
  }

  let lastIndex = Infinity;
  let staff = null;
  const props = {
    case: null,
    at: null
  };

  const prefix = STAFF_PREFIXES.find(p => value.indexOf(p, index) !== -1);
  // console.log({ prefix });
  if (prefix) {
    lastIndex = lookAhead(value, not(isStaffCharacter), index + prefix.length);
    // console.log({lastIndex, ch: value.charAt(lastIndex)});
    if (isWS(value.charAt(lastIndex))) {
      prefix === '@'
        ? (props.at = 'prefix')
        : (props.case = prefix.slice(0, -1));
      staff = value.slice(index + prefix.length, lastIndex);
    }
  }

  if (!staff) {
    // console.log('!!!!!', { value });
    lastIndex = lookAhead(value, not(isStaffCharacter), index);
    // console.log({a: value.charAt(lastIndex), b: value.charAt(lastIndex + 1)})
    if (lastIndex !== -1 && value.charAt(lastIndex) === '@' && isWS(value.charAt(lastIndex + 1))) {
      props.at = 'suffix';
      // console.log({ index, lastIndex });
      staff = value.slice(index, lastIndex);
      lastIndex += 1;
    }
  }

  // console.log({ staff, ...props });

  if (!staff) {
    return false;
  }
  if (silent) {
    return true;
  }
  // return false;

  return eat(value.slice(0, lastIndex))({
    type: 'womStaff',
    value: staff,
    ...props
  });
}
