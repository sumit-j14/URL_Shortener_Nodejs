const express = require('express')
const app = express()
const port = 3000
var shortUrl = require("node-url-shortener");


app.get('/', (req, res) => {
  res.send('Hello World!')
  shortUrl.short("https://ide.geeksforgeeks.org/Jav3L6vTgc", function (err, url) {
    console.log(url);
});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})