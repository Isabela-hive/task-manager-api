const express = require('express');
const morgan = require('morgan');
const config = require('./config/config');
const db = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
// const port = process.env.PORT || 3000;

// connect db
db();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/', (req, res) => {
  res.send('This is my project once more');
});

// Error handling
app.use(errorHandler);

module.exports = app;
