// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

// Define a route for handling 404 errors
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
