const express = require('express')
const app = express()

const tasks = ['Task1', 'Task2', 'Task3']

app.get('/api/tasks', (req, res) => {
  console.log('Request received!');
  res.send(tasks);
});

app.listen(3001, () => console.log('Listening on port 3001!'))