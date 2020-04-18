const express = require('express')
const fetch = require('node-fetch')
const app = express()


app.get('/smasher', async (req, res) => {
  const bodies = await smasher(req.query.urls)
  res.send(bodies)
})

async function smasher(urls) {
  let result = ""
  await Promise.all(urls.map(url => fetch(url.toString())))
    .then(resp => Promise.all(resp.map(r => r.text()))
      .then(r => {result = r.join()})
      .catch(err => console.log(err)))
  return result
}

const server = app.listen(3000, () => console.log("server started on port 3000"))

module.exports = server
