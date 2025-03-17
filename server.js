const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve the index.html for GET /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle POST requests to /submit
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Form data received:', { name, email, message });
    res.json({ status: 'success', message: 'Form data received!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});