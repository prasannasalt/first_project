const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (index.html, images, CSS, etc.)
app.use(express.static(path.join(__dirname)));

// Example route to serve your main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});