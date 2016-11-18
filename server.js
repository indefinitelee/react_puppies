'use strict'
require('dotenv').config({ silent: true });
const bodyParser = require('body-parser');
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.log('server here! listening on', PORT));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Modular routes

// import router for our API
const apiPuppiesRouter = require('./routes/api/puppies');

// map our apiRouter to the '/api' route
app.use('/api/puppies', apiPuppiesRouter);

app.listen(PORT, () => {
  console.log('woof! 🐶');
});
