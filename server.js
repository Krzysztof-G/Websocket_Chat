const express = require('express');
const path = require('path');

const app = express();

const messages = [];

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/')));

// Show index.html as main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/index.html'));
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});