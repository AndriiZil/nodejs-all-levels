const express = require('express');

const app = express();

const pause = (time) => new Promise((resolve) => setTimeout(resolve, time));

app.get('/', async (req, res) => {
  await pause(2000);

  return res.json({ success: true });
});

app.listen(3000);
