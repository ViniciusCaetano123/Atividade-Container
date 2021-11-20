'use strict';
const express = require('express');
const PORT = process.env.PORT||8080;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/vem', (req, res) => {
    res.send('Hello World2');
  });

app.listen(PORT);
console.log("Running on http://:${PORT}");