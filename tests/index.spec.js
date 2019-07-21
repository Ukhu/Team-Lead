import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';

const { expect } = chai;

chai.use(chaiHttp);

const url = '/';

describe('Test for base url', () => {
  it('should return a status code of 200', (done) => {
    chai.request(server)
      .get(url)
      .end((error, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });
});
