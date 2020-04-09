const chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);
const server = require('./index')

const expect = chai.expect;


describe("Smasher", () => {
  it('allows the bbc and guardian urls to be added as query strings and the res will contain "bbc" and "the guardian"', async () => {
    await chai.request(server)
      .get('/smasher')
      .query({urls: ["https://news.bbc.co.uk", "https://www.theguardian.com"]})
      .then((res) => {
        expect(res).to.have.status(200)
        expect(res.text).to.not.contain('nfaihsfo')
        expect(res.text).to.contain('bbc')
        expect(res.text).to.contain('The Guardian')
      })
  })
})



