const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8989
const path = require('path')
const Tasks = require('./db/models/Tasks.js')
const bodyParser = require('body-parser')

app.use(bodyParser({extended:true}))

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
    .catch(err => {
      console.log('error', err)
    })
})



app.post('/new', (req, res) => {
  console.log("more info!!!", req.body)
  const newTask = req.body;
  console.log("info to add:", newTask);
  Tasks
    .forge(newTask)
    .save()
    .then(results => {
      return Tasks.fetchAll()
    })
    .then(results => {
      console.log("whats the data", results)
      res.json(results.serialize())
    })
    .catch(err => {
      console.log("server post error ", err)
    })
})


app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`)
})