const express = require('express')
const app = express()

app.get('/smasher', (_, res) => {
    res.send('hello world')
})

const server = app.listen(3000, () => console.log("server started on port 3000"))

module.exports = server
