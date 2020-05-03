const {smasher, call} = require("./smasher");
const express = require('express')
const app = express()


app.get('/smasher', async (req, res) => {
  const bodies = await smasher(req.query.urls, call)
  res.send(bodies)
})



app.listen(3000, () => console.log("server started on port 3000"))

module.exports = smasher
