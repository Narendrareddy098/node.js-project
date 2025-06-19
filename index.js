// index.js
const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require('./routes/users');

app.use(express.json()); // parse JSON body
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Node.js REST API!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

