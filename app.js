const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Hello from Node.js REST API!';

app.get('/', (req, res) => {
  res.send({ message });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

