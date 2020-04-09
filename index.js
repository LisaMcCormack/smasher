const express = require('express')
const fetch = require('node-fetch')
const app = express()

app.get('/smasher', (req, res) => {
  const urls = req.query.urls
  fetch(urls.toString())
    .then(response => response.text())
    .then(data => {
      res.write(data)
      res.end()
    })
})

const server = app.listen(3000, () => console.log("server started on port 3000"))

module.exports = server
