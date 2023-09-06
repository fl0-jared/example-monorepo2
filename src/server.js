const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    version: '1',
  });
});

app.listen(process.env.PORT ?? 8081);
