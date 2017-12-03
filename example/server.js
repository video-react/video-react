const fs = require('fs');
const path = require('path');
const express = require('express');
const next = require('next');
const prismjs = require('prismjs');

const port = parseInt(process.env.PORT, 10) || 9000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

global.Prism = prismjs;

const redirects = [
  { from: '/customize', to: '/customize/enable-disable-components' },
  { from: '/components', to: '/components/player' },
];

app.prepare()
  .then(() => {
    const server = express();

    server.get('/code/:filename', (req, res) => {
      const { filename } = req.params;
      const filepath = path.resolve(__dirname, `./examples/${filename}`);
      const code = fs.readFileSync(filepath, 'utf8');
      return res.end(code);
    });


    redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
      server[method](from, (req, res) => {
        res.redirect(type, to);
      });
    });

    server.use(handle);

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
