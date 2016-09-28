import sinon from 'sinon';
import mock from 'proxyquire';
mock.noCallThru();

describe('(handler) SINGLE update', function () {
  let testFn, modelStub, context;

  beforeEach(function () {
    modelStub = {
      findOneAndUpdate: sinon.stub()
    };
    context = {
      params: {id: 123},
      request: {
        body: 'fish'
      }
    };
    const required = mock('../update', {
      '../model': modelStub
    });

    testFn = required.default;
  })
  it('should be a function', function () {
    expect(typeof testFn).to.equal('function');
  });
  it('should attempt to call findAndUpdate a todo via the model using $set syntax', async function () {

    expect(modelStub.findOneAndUpdate).to.not.be.called;
    await testFn.apply(context).next();
    expect(modelStub.findOneAndUpdate).to.be.calledWith(
      sinon.match.has('_id'),
      sinon.match.has('$set'),
      sinon.match.has('new')
    );
  });
  it('should attempt to call a find and update', async function () {
    modelStub.findOneAndUpdate.returns(Promise.resolve('fish'));

    const moo = await testFn.apply(context).next().value;
    expect(moo).to.equal('fish');
  });
  it('should set error with message and status of 404', async function () {
    modelStub.findOneAndUpdate.returns(Promise.resolve(null));

    const fn = testFn.apply(context);
    await fn.next();  //  Waits for the model return
    await fn.next();  //  Applies changes on this
    expect(context).to.have.property('status', 404);
    expect(context.body).to.have.property('message');
  });
});
