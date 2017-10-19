const path = require('path');
const expect = require('chai').expect;
const sinon = require('sinon');
const _ = require(path.join(__dirname, '..', './index.js'));

describe('_', function () {
  'use strict';

  it('is an object', () => {
    expect(_).to.be.an('object');
  });
});

/** ***************IDENTITY*****************/
describe('_.identity', () => {
    it('is a function', () => {
      expect(_.identity).to.be.a('function');
    });
    it('identity returns input value', () => {
      expect(_.identity('hello world')).to.equal('hello world');
    });
    it('returns undefined if no argument is passed', () => {
      expect(_.identity()).to.equal(undefined);
    });
    it('returns the same ref to a passed argument', () => {
      const input = {};
      expect(_.identity(input) === input).to.equal(true);
    });
  });

/** ***************VALUES*****************/
 describe.only('_.values', () => {
   it('is a function', () => {
     expect(_.values).to.be.a('function');
   });
   it('returns empty array if input is not an object', () => {
     expect(_.values()).to.eql([]);
     expect(_.values('')).to.eql([]);
     expect(_.values(1)).to.eql([]);
   });
   it('returns empty array if given empty object or empty array', () => {
     expect(_.values([])).to.eql([]);
     expect(_.values({})).to.eql([]);
   });
   it('return all keys in objects', () => {
     const input = {'hello': 2};
     const expected = [2];
     expect(_.values(input)).to.eql(expected);
   });
   it('return all values in objects', () => {
     const input = {name: 'Jonathan', age: 26 };
     const expected = ['Jonathan', 26];
     expect(_.values(input)).to.eql(expected);
   });
 });

/** ***************FIRST*****************/

describe('_.first', () => {
  it('_.first is a function', () => {
    expect(_.first).to.be.a('function');
  });
  it('returns undefined not passed an array with a length greater than 0', () => {
    expect(_.first()).to.eql();
  });
});
