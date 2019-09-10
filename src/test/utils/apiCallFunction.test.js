import chai from 'chai';
import chaiHttp from 'chai-http';
import sinonChai from 'sinon-chai';
import { status, makeApiCall } from '../../utils';
import env from '../../../env'


chai.use(chaiHttp);
chai.use(sinonChai);
const { expect } = chai;

describe('Api Call Functions', () => {
    const tag = 'tech'
    const sortBy = 'likes'
    const direction = 'desc'
    const url = `${env.api_base_url}?tag=${tag}&sortBy=${sortBy}&direction=${direction}`
    context('api call function returns a response', () => {
      it('return a response', async () => {
        const response = await makeApiCall(url);
        expect(response).to.be.a('object');
      });
    });
  
});