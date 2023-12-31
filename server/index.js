require('dotenv').config()
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const routes = require('./routes')
const app = next({ dev })
const handle = routes.getRequestHandler(app)


app.prepare()
  .then(() => {
    const server = express()
    
     server.use(handle)
    
    server.get('*', (req, res) => {
        return handle(req, res);
    })
   

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> ................... Ready on http://localhost:${port} ......................... `)
    })
  })

