// Simple Node.js REST API demo
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from REST API demo!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a sample data from REST API.' });
});

app.post('/api/data', (req, res) => {
  const receivedData = req.body;
  res.json({ message: 'Data received successfully', data: receivedData });
});

app.listen(port, () => {
  console.log(`REST API demo listening at http://localhost:${port}`);
});
