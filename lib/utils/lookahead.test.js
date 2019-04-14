const { expect } = require('chai');
const { lookahead } = require('./lookahead');

const SAMPLESTRING = '_abcdefghijk';

const ch = (s) => (сс) => (сс === s.charCodeAt(0));
const oops = (s) => s.split('').map(ch);

describe('lookahead', () => {
    it('should match a single character', () =>
        expect(lookahead(SAMPLESTRING, 0, oops('e'))).to.eql([5]));

    it('should match consequtive characters', () =>
        expect(lookahead(SAMPLESTRING, 2, oops('cd'))).to.eql([3, 4]));

    it('should match ', () =>
        expect(lookahead(SAMPLESTRING, 2, oops('ce'))).to.eql([3, 5]));

    it('should match a part of query', () =>
        expect(lookahead(SAMPLESTRING, 2, oops('cc'))).to.eql([3, null]));

    it('should match a part of query', () =>
        expect(lookahead(SAMPLESTRING, 2, oops('a'))).to.eql([null]));

    it('should match a part of query', () =>
        expect(lookahead(SAMPLESTRING, 2, oops('ccd'))).to.eql([3, null, null]));

    it('should match a part of query', () =>
        expect(lookahead('aggg', 1, oops('ggg'))).to.eql([1, 2, 3]));
});
