const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve index.html at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Optional: simple API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from FangDootle Server!' });
});

// Catch-all route redirects to root
app.get('*', (req, res) => {
    res.redirect('/');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
