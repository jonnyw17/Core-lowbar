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
describe('#identity', () => {
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
