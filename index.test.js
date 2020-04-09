var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);
const server = require('./index')

var expect = chai.expect;


describe("Smasher", () => {
  it('returns a 200 status code and hello world', (done) => {
    chai.request(server)
      .get('/smasher')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).to.have.status(200)
        done()
      })
  })
})



