const fetch = require('node-fetch')
const express = require('express')
const app = express()


app.get('/smasher', async (req, res) => {
  const bodies = await smasher(req.query.urls)
  res.send(bodies)
})

async function smasher(url, func) {
  func = call(url)
 return await  func
}

async function call(url) {
  let result = ""
  await fetch(url)
    .then(response => response.text())
    .then(data => {
      result = data
    })
  return result
}


const server = app.listen(3000, () => console.log("server started on port 3000"))

module.exports = server
