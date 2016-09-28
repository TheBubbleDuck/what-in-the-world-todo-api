import chai       from 'chai';
import sinon      from 'sinon';
import sinonChai  from 'sinon-chai';

require('mocha-sinon')();

chai.use(sinonChai);
chai.config.includeStack = true;

// global.mockRequire = mock;
global.sinon = sinon;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
