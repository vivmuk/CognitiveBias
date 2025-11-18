const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for root - redirect to bias-learning-hub.html
app.get('/', (req, res) => {
    res.redirect('/bias-learning-hub.html');
});

// Route for index.html - redirect to bias-learning-hub.html
app.get('/index.html', (req, res) => {
    res.redirect('/bias-learning-hub.html');
});

// Health check endpoint for Railway
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Cognitive Bias Learning Hub is running on port ${PORT}`);
    console.log(`📚 Access the hub at: http://localhost:${PORT}/bias-learning-hub.html`);
});

