const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    version: '2',
  });
});

app.listen(process.env.PORT ?? 8081);
