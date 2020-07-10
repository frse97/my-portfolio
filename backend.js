const express = require('express');
const next = require('next');
// const nextI18NextMiddleware = require('next-i18next/middleware').default;

// const nextI18next = require('./i18next');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
  } catch (e) {
    console.log('Error while preparing the Next app');
  }
  const server = express();

  server.get('*', (req, res) => handle(req, res));

  try {
    await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
  } catch(e) {
    console.log(`> Unable to host on http://localhost:${port}`);
  }
})();
