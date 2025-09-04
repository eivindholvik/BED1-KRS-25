const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const todosRouter = require('./routes/todos');
const { initAndSeed } = require('./models');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/todos', todosRouter);

app.get('/healthz', (_req, res) => res.json({ ok: true }));

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, _next) {
  res.status(err.status || 500).json({ error: err.message });
});

initAndSeed().catch(err => {
  console.error('DB init failed:', err);
  process.exit(1);
});

module.exports = app;
