const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({
    message: "HELLO Suppy I LOVE U ❤️!",
    time: new Date().toISOString(),
    random: Math.floor(Math.random() * 100)
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
