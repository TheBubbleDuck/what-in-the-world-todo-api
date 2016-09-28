import chai       from 'chai';
import sinon      from 'sinon';
import sinonChai  from 'sinon-chai';
import mock       from 'proxyquire';

require('mocha-sinon')();
require('mocha-generators').install();

chai.use(sinonChai);
chai.config.includeStack = true;

// global.mockRequire = mock;
global.sinon = sinon;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
