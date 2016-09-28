import sinon from 'sinon';
import mock from 'proxyquire';
mock.noCallThru();

describe('(handler) LIST fetch', function () {
  let fetch, modelStub;
  beforeEach(function () {
    modelStub = {
      find: sinon.stub()
    };
    const required = mock('../fetch', {
      '../model': modelStub
    });

    fetch = required.default;
  })
  it('should be a function', function () {
    expect(typeof fetch).to.equal('function');
  });
  it('should attempt to find todos via the model', function () {
    expect(modelStub.find).to.not.be.called;
    fetch().next();
    expect(modelStub.find).to.be.called;
  });
  it('should set the body to the response of the find', async function () {
    modelStub.find.returns(Promise.resolve('fish'));
    const moo = await fetch().next().value;
    expect(moo).to.equal('fish');
  });
});
