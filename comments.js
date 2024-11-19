// Create web server
// 1. Create a new file named comments.js
// 2. Import the http module
// 3. Create a server
// 4. Listen for incoming requests
// 5. Send a response

// Import the http module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

// Listen for incoming requests
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the file in the terminal
// node comments.js

// Open http://localhost:3000 in your browser to see the response
// Hello, World!

// To stop the server, press Ctrl + C in the terminal
