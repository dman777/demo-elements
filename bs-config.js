const historyApiFallback = require('connect-history-api-fallback');
const httpProxy = require('http-proxy');
const path = require('path');
const express = require('express');
const transformMiddleware =
  require('express-transform-bare-module-specifiers').default;

const app = express();
const bs = require('browser-sync').create();
app.use(transformMiddleware());


bs.init({
  server: {
    //baseDir: 'button',
  },
  notify: false,
  "files": [
    '*',
    'button/*',
    'input/*',
    'select/*',
    'checkbox/*',
    'radio/*',
  ],
  middleware: [
    historyApiFallback(),
    app,
  ],
  port: 5000,
  ui: false,
});


