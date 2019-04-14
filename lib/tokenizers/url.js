'use strict';

var decode = require('parse-entities');
var whitespace = require('is-whitespace-character');
var locate = require('./url-locate');
var womTicket = require('./ticket-wom');

module.exports = url;
url.locator = locate;
url.notInLink = true;

var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_AT_SIGN = '@';

var REF_MARK = 'ref:';

var HTTP_PROTOCOL = 'http://';
var HTTPS_PROTOCOL = 'https://';
var MAILTO_PROTOCOL = 'mailto:';
var FILE_PROTOCOL = 'file:';

var TL_HAS_POPEN_SPACE = 0x01;
var TL_HAS_BOPEN_SPACE = 0x02;
var TL_HAS_SPACE_PCLOSE = 0x04;
var TL_HAS_SPACE_BCLOSE = 0x08;
var TL_HAS_BINGO = 0x0f; // all together

var PROTOCOLS = [
  HTTP_PROTOCOL,
  HTTPS_PROTOCOL,
  MAILTO_PROTOCOL,
  FILE_PROTOCOL,
];

var PROTOCOLS_LENGTH = PROTOCOLS.length;

function url(eat, value, silent) {
  var self = this;
  var subvalue;
  var content;
  var character;
  var index;
  var position;
  var protocol;
  var match;
  var length;
  var queue;
  var parenCount;
  var nextCharacter;
  var exit;
  var tlBingo;
  var tlPos;
  var ref;

  // if (!self.options.wfm) {
  //   return;
  // }

  subvalue = '';

  ref = false;
  match = value.slice(0, REF_MARK.length);
  if (match === REF_MARK) {
    ref = true;
    subvalue = match;
  }

  index = -1;
  length = PROTOCOLS_LENGTH;

  while (++index < length) {
    protocol = PROTOCOLS[index];
    match = value.slice(subvalue.length, subvalue.length + protocol.length);

    if (match.toLowerCase() === protocol) {
      subvalue += match;
      break;
    }
  }

  if (!subvalue) {
    return;
  }

  index = subvalue.length;
  length = value.length;
  queue = '';
  parenCount = 0;

  tlBingo = 0;
  tlPos = [];

  while (index < length) {
    character = value.charAt(index);

    if ((parenCount === 0 && whitespace(character)) || character === C_LT) {
      break;
    }

    if (
      character === '.' ||
      character === ',' ||
      character === ':' ||
      character === ';' ||
      character === '"' ||
      character === '\'' ||
      (parenCount <= 0 && (
        character === ')' ||
        character === ']'
      ))
    ) {
      nextCharacter = value.charAt(index + 1);

      if (!nextCharacter || parenCount === 0 && whitespace(nextCharacter)) {
        break;
      }
    }

    var isParen = character === C_PAREN_OPEN || character === C_PAREN_CLOSE;
    // ( or [
    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
      parenCount++;

      if (whitespace(value.charAt(index + 1))) {
        tlBingo = tlBingo | (isParen ? TL_HAS_POPEN_SPACE : TL_HAS_BOPEN_SPACE);
        tlPos[isParen ? 2 : 0] = Math.min(index, tlPos[isParen ? 2 : 0] || Infinity);
      }
    }

    // ) or ]
    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
      parenCount--;

      if (whitespace(value.charAt(index - 1))) {
        tlBingo = tlBingo | (character === C_PAREN_CLOSE ? TL_HAS_SPACE_PCLOSE : TL_HAS_SPACE_BCLOSE);
        tlPos[isParen ? 3 : 1] = Math.max(index, tlPos[isParen ? 3 : 1] || 0);
      }

      if (parenCount < 0) {
        break;
      }
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue += queue;
  content = subvalue;

  if (protocol === MAILTO_PROTOCOL) {
    position = queue.indexOf(C_AT_SIGN);

    if (position === -1 || position === length - 1) {
      return;
    }

    content = content.substr(MAILTO_PROTOCOL.length);
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  // INJECTING TICKETS JUST INTO THE GAME (TODO: DROP THIS ASAP)
  var result = null;
  // eslint-disable-next-line
  if (!ref && protocol !== FILE_PROTOCOL && tlBingo > 0) (function() {
    if (tlBingo !== TL_HAS_BINGO) {
      return;
    }

    if (!(tlPos[0] < tlPos[1] && (tlPos[1] + 1 === tlPos[2]) && tlPos[2] < tlPos[3])) {
      // Something goes wrong, This should not happen
      return;
    }

    var slashPos = queue.indexOf('/');
    var ticketPos = womTicket.locator(queue.slice(slashPos + 1), 0);

    // Probably a ticket
    if ((protocol === HTTP_PROTOCOL || protocol === HTTPS_PROTOCOL) && (ticketPos === 0)) {
      var realm = queue.slice(0, slashPos);
      ticketPos = slashPos + 1 + protocol.length;

      var add = eat(subvalue.slice(0, ticketPos));
      exit = self.enterLink();

      var ticket = [].concat(self.tokenizeInline(subvalue.slice(ticketPos), eat.now()))[0];

      // Add this to nowhere
      add.reset({}, {children:[]});
      exit();

      if (!ticket || ticket.type !== 'womTicket') {
        return;
      }

      ticket.protocol = protocol;
      ticket.realm = realm;
      ticket.url = subvalue.slice(0, tlPos[0]);

      result = eat(subvalue)(ticket);
    }
  })();

  if (result) {
    return result;
  }

  /* Temporarily remove all tokenizers except text in autolinks. */
  var tokenizers = self.inlineTokenizers;
  var offset = ref ? REF_MARK.length : 0;
  self.inlineTokenizers = {text: tokenizers.text};

  exit = self.enterLink();

  var now = eat.now();
  now.offset += offset;
  now.column += offset;
  content = self.tokenizeInline(content.slice(offset), now);

  self.inlineTokenizers = tokenizers;
  exit();
  // ДОНЕ

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(subvalue.slice(offset), {nonTerminated: false}),
    ref: ref || undefined,
    children: content
  });
}
