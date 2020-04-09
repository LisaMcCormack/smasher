const express = require('express')
const fetch = require('node-fetch')
const app = express()


app.get('/smasher', (req, res) => {
  const urls = req.query.urls
  Promise.all(urls.map(url => fetch(url.toString())))
    .then(resp => Promise.all(resp.map(r => r.text()))
      .then(result => {
        res.write(result.join())
        res.end()
      })
    .catch(err => console.log(err)))

})

const server = app.listen(3000, () => console.log("server started on port 3000"))

module.exports = server
