const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const tasks = [
  { key: 1, job: 'Do the washing', dateTime: "29/11/2017, 14:03:33", completed: false },
  { key: 2, job: 'Walk the dog', dateTime: "29/11/2017, 14:04:51", completed: true }
]

app.get('/api/tasks', (req, res) => {
  console.log('Request received!');
  res.send(tasks);
});

// Unique key generator
let currentKey = 2;
const genKey = () => ++currentKey;

app.post('/api/tasks', (req, res) => {
  console.log('Post Request successful!')
  let { key, job } = req.body;
  let dateTime = new Date();
  tasks.unshift({ key: genKey(), job: job, dateTime: dateTime, completed: false });
  res.send(tasks[0]);
});
app.listen(3001, () => console.log('Listening on port 3001!'))