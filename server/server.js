const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8989
const path = require('path')
const Tasks = require('./db/models/Tasks.js')

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.json('ALOHA!!!!!!')
})

app.get('/tasks', (req, res) => {
  Tasks
  .fetchAll()
  .then(items => {
    res.json(items.serialize())
  })
  .catch( err => {
    console.log('error', err)
  })
})



app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`)
})