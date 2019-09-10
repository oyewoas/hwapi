import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { successResponse, errorResponse, status } from '../../utils';
import { cacheMidWare } from '../../middlewares';
chai.use(chaiHttp);
chai.use(sinonChai);
const { expect } = chai;
const url = 'https://hatchways.io/api/assessment/blog/posts?tag=tech'

describe('Cache Function', () => {
  afterEach(() => sinon.restore());

  context(' Response function', () => {
    it('fakes a call to the cache response', async () => {
        const req = {
            url
          };
      const res = {
        status: () => {},
        json: () => {},
        send: () => {},
        sendResponse: () => {}
      };

      const next = ()=> {}
      sinon.stub(res, 'status').returnsThis();
      cacheMidWare(req, res, next);
    });
  });
});

