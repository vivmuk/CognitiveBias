# Production Issues Guide

## Venice API 404 Error in Production

### Problem
The Venice API works locally but returns 404 errors when deployed to Netlify.

### Why This Happens

**404 errors in production but not locally are typically caused by:**

1. **CORS Preflight Failure**: When making cross-origin requests with custom headers (like `Authorization`), browsers send a preflight OPTIONS request. If this fails, you may see a 404.

2. **Origin Restrictions**: Venice AI might restrict API access to certain origins/domains.

3. **Network/Firewall Issues**: Some networks or firewalls block API requests.

4. **API Key Restrictions**: The API key might be configured to only work from specific IPs/origins.

### Debugging Steps

1. **Open Browser Console on Deployed Site** (F12)
   - Look for detailed error messages
   - Check the Network tab for the actual request

2. **Check Network Tab**:
   - Look for the API request
   - Check if there's an OPTIONS (preflight) request before the POST
   - See the actual response status and headers

3. **Verify API Key**:
   - Check Venice AI dashboard
   - Ensure API key is active and not restricted
   - Verify the key works from other origins

4. **Test from Different Origins**:
   - Try the API from a different domain
   - Test with curl or Postman to verify the endpoint works

### Solutions

#### Option 1: Use a Proxy/Backend (Recommended for Production)

Create a Netlify serverless function to proxy API requests:

1. Create `netlify/functions/venice-proxy.js`:
```javascript
exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.VENICE_API_KEY;
  const requestBody = JSON.parse(event.body);

  try {
    const response = await fetch('https://api.venice.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

2. Set environment variable in Netlify:
   - Site settings → Environment variables
   - Add `VENICE_API_KEY` with your API key

3. Update `venice-api.js` to use the proxy:
```javascript
this.baseURL = '/.netlify/functions/venice-proxy';
```

#### Option 2: Contact Venice AI Support

Ask Venice AI to:
- Whitelist your Netlify domain
- Verify CORS settings allow your origin
- Check if there are any API key restrictions

#### Option 3: Check API Key Configuration

1. Log into Venice AI dashboard
2. Check API key settings
3. Look for origin/IP restrictions
4. Remove any restrictions if found

### Tailwind CSS CDN Warning

**Warning**: `cdn.tailwindcss.com should not be used in production`

This is just a warning - your site still works, but for better performance:

1. **Quick Fix (Optional)**: Ignore the warning for now
2. **Production Fix**: Build Tailwind CSS locally (see below)

#### Building Tailwind CSS for Production

1. Install Tailwind:
```bash
npm install -D tailwindcss
npx tailwindcss init
```

2. Create `input.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Build CSS:
```bash
npx tailwindcss -i input.css -o styles-tailwind.css --minify
```

4. Replace CDN link in HTML:
```html
<!-- Remove this -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Add this -->
<link rel="stylesheet" href="styles-tailwind.css">
```

### Quick Test

To verify if it's a CORS issue:

1. Open deployed site
2. Open browser console (F12)
3. Go to Network tab
4. Try to use AI exploration
5. Look for:
   - OPTIONS request (preflight)
   - POST request
   - Check response headers for CORS headers

### Current Status

- ✅ API works locally
- ❌ API returns 404 in production
- ⚠️ Tailwind CDN warning (cosmetic, site works)

### Next Steps

1. Check browser console on deployed site for detailed errors
2. Consider implementing the proxy solution (Option 1)
3. Contact Venice AI support if needed

