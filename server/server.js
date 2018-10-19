const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8989
const path = require('path')
const Tasks = require('./db/models/Tasks.js')
const Boards = require('./db/models/Boards.js')
const Users = require('./db/models/Users.js')


const bodyParser = require('body-parser')

app.use(bodyParser({
  extended: true
}))

app.use(express.static(path.join(__dirname, '../build')));

// app.get('/', (req, res) => {
//   res.json('ALOHA!!!!!!')
// })

// adding a new task
app.post('/new', (req, res) => {
  // console.log("more info!!!", req.body)
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

// get all tasks
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

// get all boards --> not currently being used.
app.get('/boards', (req, res) => {
  Boards
    .fetchAll()
    .then(items => {
      res.json(items.serialize())
    })
    .catch(err => {
      console.log('error', err)
    })
})

// get a task by id
app.get('/edit/:id', (req, res) => {
  const tasks_id = req.params.id
  console.log("whats the params", tasks_id)
  Tasks
    .where({tasks_id})
    .fetchAll()
    .then(results => {
      const temp = results.toJSON()
      console.log("DA RESULTS!!!", temp)
      const  daTask = temp[0];
      res.json(daTask)
    })
    .catch(err => {
      console.log("edit error", err)
    })

})






app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`)
})