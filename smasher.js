const fetch = require('node-fetch')

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
  } catch (err) {
    console.log(err)
    return ""
  }
}

module.exports = {smasher, call}




