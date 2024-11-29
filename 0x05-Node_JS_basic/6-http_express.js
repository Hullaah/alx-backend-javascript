const express = require('express');

const app = express();
app.listen(1245);

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

module.exports = app;
