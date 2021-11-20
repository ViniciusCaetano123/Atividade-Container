'use strict';
const express = require('express');
const PORT = process.env.port||8080;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT);
console.log("Running on http://:${PORT}");