const express = require('express')
const serverLog = require('./serverLog')
const app = express()
const PORT = 3000

app.use(serverLog)

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})