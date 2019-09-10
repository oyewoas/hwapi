import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { successResponse, errorResponse, status } from '../../utils';

chai.use(chaiHttp);
chai.use(sinonChai);
const { expect } = chai;

describe('Response Functions', () => {
  afterEach(() => sinon.restore());

  context('Error Response function', () => {
    it('fakes a call to the error response', async () => {
      const res = {
        status: () => {},
        json: () => {}
      };
      sinon.stub(res, 'status').returnsThis();

      errorResponse(res, status.notfound, 'Not found!');
      expect(res.status).to.have.been.calledWith(status.notfound);
    });
  });

  context('Success Response function', () => {
    it('fakes a call to the success response', async () => {
      const res = {
        status: () => {},
        json: () => {}
      };
      sinon.stub(res, 'status').returnsThis();

      successResponse(res, status.success, 'Success!');
      expect(res.status).to.have.been.calledWith(status.success);
    });
  });
});