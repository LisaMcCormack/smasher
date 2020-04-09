var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);
const server = require('./index')

const expect = chai.expect;


describe("Smasher", () => {
  it('allows the bbc url to be added as a query string and the res will contain "bbc"', (done) => {
    chai.request(server)
      .get('/smasher')
      .query({urls: "https://news.bbc.co.uk"})
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res).to.have.status(200)
        expect(res.text).to.contain('bbc')
        expect(res.text).to.not.contain('hfasoihtrahfiluhahrgkbiva')
        done()
      })
  })
})



