const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is my project once more');
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
