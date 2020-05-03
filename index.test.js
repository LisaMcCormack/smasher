const {smasher} = require("./smasher");


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



