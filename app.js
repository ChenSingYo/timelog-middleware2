const express = require('express')
const app = express()
const PORT = 3000
const timelog = require('./timelog')

// disable favicon.ico request
app.get('/favicon.ico', (req, res) => res.status(204).end())

app.use(timelog)

app.get('/', (req, res) => {
  res.send(`<a href="/">List Todo</a>
  <a href="/new">New Todo</a>
  <a href="/id">Show Todo</a>
  <form action="/" method="POST">
    <button type="submit">Add Todo</button>
  </form>
`)
})

app.get('/new', (req, res) => {
  res.send(`<a href="/">List Todo</a>
  <a href="/new">New Todo</a>
  <a href="/id">Show Todo</a>
  <form action="/" method="POST">
    <button type="submit">Add Todo</button>
  </form>
`)
})

app.get('/:id', (req, res) => {
  res.send(`<a href="/">List Todo</a>
  <a href="/new">New Todo</a>
  <a href="/id">Show Todo</a>
  <form action="/" method="POST">
    <button type="submit">Add Todo</button>
  </form>
`)
})

app.post('/', (req, res) => {
  res.send(`<a href="/">List Todo</a>
  <a href="/new">New Todo</a>
  <a href="/id">Show Todo</a>
  <form action="/" method="POST">
    <button type="submit">Add Todo</button>
  </form>
`)
})

app.listen(PORT, () => {
  console.log(`App running http://localhost:${PORT}`)
})
