const fs = require('fs');
const path = require('path');
const express = require('express')
const next = require('next')
const prismjs = require('prismjs');

const port = parseInt(process.env.PORT, 10) || 9000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

global.Prism = prismjs

app.prepare()
.then(() => {
  const server = express()

  // custom route for posts
  server.get('/post/:id', (req, res) => {
    return app.render(req, res, '/post', {
      id: req.params.id
    })
  })

  server.get('/code/:filename', (req, res) => {
    const { filename } = req.params;
    const filepath = path.resolve(__dirname, `./examples/${filename}`);
    const code = fs.readFileSync(`./examples/${filename}`, 'utf8');
    return res.end(code);
  });

  server.use(handle)

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
