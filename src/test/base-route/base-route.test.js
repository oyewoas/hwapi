import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../server';
import { status } from '../../utils';

chai.use(chaiHttp);
chai.should();

const entryRoute = '/';

// Base Route Test
describe('Base Route Test ', () => {
  it('should return welcome user Welcome to wolfsbane server', (done) => {
    chai.request(server).get(entryRoute).end((error, response) => {
      if (error) throw Error(`Error making test request ${entryRoute}`);
      response.should.have.status(status.success);
      response.body.message.should.equal('Welcome to Ayooluwa server');
      done();
    });
  });
});