'use strict';

module.exports = womStaff;

const STAFF_PREFIXES = ['кто:', 'кого:', 'укого:', 'ского:', 'кому:', 'кем:', 'ком:', 'оком:', 'staff:', '@'];
const CLUB_PREFIXES = ['club:', 'клуб:'];
const VALID_PREFIXES = [].concat(CLUB_PREFIXES, STAFF_PREFIXES);
const STAFF_SUFFIXES = ['@'];

const VALID_PREFIXES_FIRST_LETTERS = new Set(VALID_PREFIXES.map(p => p.charAt(0)));
const isValidCharacter = ch => (/[-a-zа-яё0-9._]/i).test(ch);
const isW = ch => (/\w/i).test(ch);

/**
 * Truthy variants
 * ? — vasya@
 * '@' — @vasya
 * 'к' — кто:vasya, кому:vasya, кого:vasya, кем:vasya, клуб:классный
 * 'у' — укого:vasya
 * 'о' — оком:vasya
 * 's' — staff:vasya
 * 'c' — club:awesome
 * @param {string} ch — Character
 * @returns {boolean}
 */
const isValidLinkProbably = ch => isValidCharacter(ch) || VALID_PREFIXES_FIRST_LETTERS.has(ch);

const not = (fn) => (...args) => !fn(...args);
const isWS = (ch) => ch === '\n' || /\s/.test(ch.charAt(0)) || ch === '';
const isNotWS = not(isWS);

function lookAhead(value, test, offset) {
  const l = value.length;
  let i = offset;
  while (i < l && !test(value.charAt(i))) {
    i += 1;
  }
  return i;
}

function lookBehind(value, test, offset) {
  let i = offset;
  while (i > 0 && !test(value.charAt(i - 1))) {
    i -= 1;
  }
  return i;
}

womStaff.locator = (value, index) => {
  const dogPos = value.indexOf('@', index);
  if (dogPos === -1 && value.indexOf(':', index) === -1) {
    return -1;
  }

  const results = [].concat(
    VALID_PREFIXES.map(prefix => {
        let pos = value.indexOf(prefix, index);
        if (isNotWS(value.charAt(pos - 1))) {
            return -1;
        }

        return pos;
    }),
    STAFF_SUFFIXES.map(suffix => {
      let pos = value.indexOf(suffix, index);
      if (pos === -1 || isValidCharacter(value.charAt(pos + 1))) {
        return -1;
      }

      pos = lookBehind(value, not(isValidCharacter), pos);
      if (isNotWS(value.charAt(pos - 1))) {
        return -1;
      }
      return pos;
    })
  );

  const res = Math.min.apply(null, results.map(pos => pos === -1 ? Infinity : pos));

  return res === Infinity ? -1 : res;
};

function womStaff(eat, value, silent) {
  let index = womStaff.locator(value, 0);
  if (index !== 0) {
    return false;
  }

  index = lookAhead(value, isNotWS, 0);
  {
    // Early return for absolutely incorrect
    let character = value.charAt(index);
    if (!isValidLinkProbably(character)) {
      return;
    }
  }

  let lastIndex = Infinity;
  let staff = null;
  const props = {
    case: null,
    at: null
  };

  // @name, staff:name, кто:name, etc:name
  const prefix = VALID_PREFIXES.find(p => value.indexOf(p, index) === index);
  if (prefix) {
    lastIndex = lookAhead(value, not(isValidCharacter), index + prefix.length);
    if (!isW(value.charAt(lastIndex))) {
      prefix === '@'
        ? (props.at = 'prefix')
        : (props.case = prefix.slice(0, -1));
      staff = value.slice(index + prefix.length, lastIndex);
    }
  }

  // name@
  if (!staff) {
    lastIndex = lookAhead(value, not(isValidCharacter), index);
    if (lastIndex !== -1 && value.charAt(lastIndex) === '@' && !isW(value.charAt(lastIndex + 1))) {
      props.at = 'suffix';
      staff = value.slice(index, lastIndex);
      lastIndex += 1;
    }
  }

  if (!staff) {
    return false;
  }
  if (silent) {
    return true;
  }

  return eat(value.slice(0, lastIndex))({
    type: CLUB_PREFIXES.includes(prefix) ? 'womClub' : 'womStaff',
    value: staff,
    ...props
  });
}
