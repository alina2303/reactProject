const { createServer } = require('http')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)
const handle = app.getRequestHandler()


app.prepare()
.then(() => {
  createServer(handler)
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

////
//// DATABASE CONNECTION
////

const co = require('co')
const { MongoClient } = require('mongodb')
const api = require('./static/api')
const express = require('express')
const body = require('body-parser')

co(function * () {
  // Initialize the Next.js app
  yield app.prepare()

  console.log(`Connecting to ${'mongodb://localhost:27017/project'}`)
  const db = yield MongoClient.connect('mongodb://localhost:27017/project')

  // Configure express to expose a REST API
  const server = express()
  server.use(body.json())
  server.use((req, res, next) => {
    // Also expose the MongoDB database handle so Next.js can access it.
    req.db = db
    next()
  })
  server.use('./static/api', api(db))

  // Everything that isn't '/api' gets passed along to Next.js
  server.get('*', (req, res) => {
    return handle(req, res)
  }) 
  
  server.listen(3000)
  console.log(`Listening on ${port}`)
}).catch(error => console.error(error.stack))