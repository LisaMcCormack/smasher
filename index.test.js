const request = require('supertest')
const server = require('./index')


describe("Smasher", () => {
  it('returns a 200 status code and hello world', (done) => {
    request(server).get('/smasher').expect(200, 'hello world')
    server.close(done)
  })
})



