'use strict';

module.exports = locate;

var PROTOCOLS = ['ref:http://', 'ref:https://', 'https://', 'http://', 'mailto:', 'file:'];

function locate(value, fromIndex) {
  var length = PROTOCOLS.length;
  var index = -1;
  var min = -1;
  var position;

  // if (!this.options.woofmd) {
  //   return -1;
  // }

  while (++index < length) {
    position = value.indexOf(PROTOCOLS[index], fromIndex);

    if (position !== -1 && (position < min || min === -1)) {
      min = position;
    }
  }

  return min;
}
