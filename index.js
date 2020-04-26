const fetch = require('node-fetch')
const express = require('express')
const app = express()


app.get('/smasher', async (req, res) => {
  const bodies = await smasher(req.query.urls, call)
  res.send(bodies)
})

async function smasher(urls, call) {
  const result = []
  for (let i = 0; i < urls.length; i++) {
    const body = await call(urls[i])
    result.push(body)
  }
  return result.join("")
}

async function call(url) {
  try {
    const response = await fetch(url)
    return await response.text()
  } catch(err) {
    console.log(err)
    return ""
  }
}


app.listen(3000, () => console.log("server started on port 3000"))

module.exports = smasher
