import sinon from 'sinon';
import mock from 'proxyquire';
mock.noCallThru();

describe('(handler) SINGLE fetch', function () {
  let fetch, modelStub;
  beforeEach(function () {
    modelStub = {
      findOne: sinon.stub()
    };
    const required = mock('../fetch', {
      '../model': modelStub
    });

    fetch = required.default;
  })
  it('should be a function', function () {
    expect(typeof fetch).to.equal('function');
  });
  it('should attempt to find a todo via the model', function () {
    const context = {params: {id: 123}};
    expect(modelStub.findOne).to.not.be.called;
    fetch.apply(context).next();
    expect(modelStub.findOne).to.be.called;
  });
  it('should set the body to the response of the find if valid', async function () {
    modelStub.findOne.returns(Promise.resolve('fish'));
    const context = {params: {id: 123}};
    const moo = await fetch.apply(context).next().value;
    expect(moo).to.equal('fish');
  });
  it('should set error with message and status of 404', async function () {
    modelStub.findOne.returns(Promise.resolve(null));
    const context = {params: {id: 123}};
    const fn = fetch.apply(context);
    await fn.next();  //  Waits for the model return
    await fn.next();  //  Applies changes on this
    expect(context).to.have.property('status', 404);
    expect(context.body).to.have.property('message');
  });
});
