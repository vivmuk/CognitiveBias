const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

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

// Proxy endpoint for Venice AI API (keeps API key secure server-side)
app.post('/api/venice', async (req, res) => {
    const apiKey = process.env.VENICE_API_KEY || 'lnWNeSg0pA_rQUooNpbfpPDBaj2vJnWol5WqKWrIEF';
    
    if (!apiKey) {
        return res.status(500).json({ 
            error: 'Venice API key not configured. Set VENICE_API_KEY environment variable.' 
        });
    }

    try {
        // Ensure venice_parameters are included if not present
        const requestBody = { ...req.body };
        if (!requestBody.venice_parameters) {
            requestBody.venice_parameters = {
                enable_web_search: "auto",
                enable_web_citations: true,
                include_venice_system_prompt: true
            };
        }

        const response = await fetch('https://api.venice.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        // Forward the status code and data
        res.status(response.status).json(data);
    } catch (error) {
        console.error('Venice API proxy error:', error);
        res.status(500).json({ 
            error: 'Failed to connect to Venice AI API',
            message: error.message 
        });
    }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Cognitive Bias Learning Hub is running on port ${PORT}`);
    console.log(`📚 Access the hub at: http://localhost:${PORT}/bias-learning-hub.html`);
});

