import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import server from '../../../server';
import { ApiController } from '../../controllers';
import {
  status, messages
} from '../../utils';
import middlewares from '../../middlewares'
chai.use(sinonChai);
chai.use(chaiHttp);
chai.should();
const { expect } = chai;
const { apiGetRequestController  } = ApiController;

const pingRoute = '/api/ping';
const requestRoute = '/api/posts';
const query = {
  tag: 'tech',
  sortBy: 'id',
  direction: 'desc'
}


describe('Request Controller test', () => {
    it('Should return a error response for the post route if tag is not provided', (done) => {
      chai.request(server).get(requestRoute).end((error, res) => {
        if (error) throw Error(`Error making test request ${requestRoute}`);
        res.should.have.status(status.bad);
        res.body.should.have.property('error').eql('Tags parameter is required');
        done();
      });
    });

    it('fakes a successful api request', async () => {
      const req = {
        query
      };
      const res = {
        status: () => {},
        json: () => {},
      };
      sinon.stub(res, 'status').returnsThis();
      await apiGetRequestController(req, res);
    });
})
