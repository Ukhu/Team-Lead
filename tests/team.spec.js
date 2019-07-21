import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';
import teamLeadAndQAGenerator from '../server/services/teamLeadQAGenerator';

const { expect } = chai;

chai.use(chaiHttp);

const url = '/api/v1/teams/';
const team = 'dahlia';

describe('GET team lead and QA', () => {
  it('should return a 404 status if there are no team leads or QAs available', (done) => {
    chai.request(server)
      .get(`${url}${team}`)
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body.status).to.equal('failure');
        expect(response.body.message).to.equal('No team lead or QA available');
        done();
      });
  });

  it('should return the latest team lead and QA for the week', (done) => {
    teamLeadAndQAGenerator().then(() => {
      chai.request(server)
        .get(`${url}${team}`)
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body.status).to.equal('success');
          expect(response.body.data).to.be.an('object');
          expect(response.body.data).to.have.keys(['teamLead', 'qualityAssuranceManager', 'week']);
          expect(response.body.data.teamLead).to.be.a('string');
          expect(response.body.data.qualityAssuranceManager).to.be.a('string');
          expect(response.body.data.week).to.be.a('number');
          done();
        });
    });
  });

  it('should return a 404 status if the team is incorrect', (done) => {
    chai.request(server)
      .get(`${url}123`)
      .end((error, response) => {
        expect(response).to.have.status(404);
        expect(response.body.status).to.equal('failure');
        expect(response.body.message).to.equal('No team found with the given name');
        done();
      });
  });
});
