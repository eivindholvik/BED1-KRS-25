const express = require('express');
const app = express();
const PORT = process.env.port || 3002;
app.get('/', (req, res) => {
  res.json({ ships: ['Explorer-1', 'Voyager-9'] });
});
app.listen(PORT, () => {
  console.log(`Ship service listening on ${PORT}`);
});
