const {smasher} = require("./smasher");
const request = require("supertest")
const app = require("./index")

describe("Smasher", () => {
  it('takes a url and returns a string', async () => {
    const stubCall = (url) => {
      if (url === "bob.com") {
        return "bob"
      }
      if (url === "cat.com") {
        return "cat"
      }
    }
    expect(await smasher(["bob.com", "cat.com"], stubCall)).toEqual("bobcat")
  })
})

describe('/smasher?urls=https://news.bbc.co.uk&urls=https://www.theguardian.com', function () {
  it('returns a 200 status code', function (done) {
  request(app)
    .get('/smasher?urls=https://news.bbc.co.uk&urls=https://www.theguardian.com')
    .expect(200, done)
  })
})





