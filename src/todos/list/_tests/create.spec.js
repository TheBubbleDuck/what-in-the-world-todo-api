import sinon from 'sinon';
import mock from 'proxyquire';
mock.noCallThru();

describe('(handler) create', function () {
  let create, modelStub;
  beforeEach(function () {
    modelStub = {
      create: sinon.stub()
    };
    const required = mock('../create', {
      '../model': modelStub
    });

    create = required.default;
  })
  it('should be a function', function () {
    expect(typeof create).to.equal('function');
  });
  it('should attempt to create todo via the model', async function () {
    expect(modelStub.create).to.not.be.called;
    const context = {request: 'cool'};
    const value = await create.apply(context).next().value;
    expect(modelStub.create).to.be.called;
  });
  it('should set the body to the response of the find', async function () {
    modelStub.create.returns(Promise.resolve('fish'));
    const moo = await create.apply({request: {cheese: 'nom'}}).next().value;
    expect(moo).to.equal('fish');
  });
});
