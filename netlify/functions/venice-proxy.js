// Netlify Function to proxy Venice AI API requests
// This keeps the API key secure server-side and avoids CORS issues

exports.handler = async (event, context) => {
    // Handle CORS preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    // Get API key from environment variable or use default
    const apiKey = process.env.VENICE_API_KEY || 'lnWNeSg0pA_rQUooNpbfpPDBaj2vJnWol5WqKWrIEF';
    
    if (!apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: 'Venice API key not configured. Set VENICE_API_KEY environment variable in Netlify.' 
            })
        };
    }

    try {
        // Parse request body
        const requestBody = JSON.parse(event.body);
        
        // Ensure venice_parameters are included if not present
        if (!requestBody.venice_parameters) {
            requestBody.venice_parameters = {
                enable_web_search: "auto",
                enable_web_citations: true,
                include_venice_system_prompt: true
            };
        }

        // Forward request to Venice AI API
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
        return {
            statusCode: response.status,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error('Venice API proxy error:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ 
                error: 'Failed to connect to Venice AI API',
                message: error.message 
            })
        };
    }
};

