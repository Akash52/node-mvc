const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.get('/product', (req, res) => {
  res.send('Product Page')
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
