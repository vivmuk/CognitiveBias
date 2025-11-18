# Troubleshooting Guide

## CORS Errors When Testing Locally

**Problem**: Getting CORS errors when opening HTML files directly (file:// protocol)

**Solution**: Always use a local web server. Never open HTML files directly in the browser.

### Quick Fix - Use Local Server:

#### Option 1: Python (Recommended)
```bash
cd "c:\Users\vivga\OneDrive\AI\AI Projects\Cognitive BIas\google cog bias"
python -m http.server 8000
```
Then open: `http://localhost:8000/bias-learning-hub.html`

#### Option 2: Use the Batch File
Double-click `start-server.bat` in the project folder

#### Option 3: VS Code Live Server
1. Install "Live Server" extension
2. Right-click any HTML file → "Open with Live Server"

## Venice API 404 Errors

### Check These:

1. **API Key**: Verify it's correct and active in Venice AI dashboard
2. **Endpoint**: Should be `https://api.venice.ai/api/v1/chat/completions`
3. **Model Name**: Currently using `venice-uncensored`
4. **Request Format**: Check browser console (F12) for detailed logs

### Debugging Steps:

1. **Open Browser Console** (F12)
2. **Try AI Exploration** on any bias page
3. **Check Console Logs** - You'll see:
   - Full request URL
   - Request body (JSON)
   - Response status
   - Error details

### Test Page:

Open `test-venice-direct.html` in a local server to test the API directly.

## Common Issues

### 1. "Failed to load resource: 404"
- **Cause**: Wrong endpoint or API key
- **Fix**: Check console logs for exact error message
- **Verify**: API key is valid in Venice AI dashboard

### 2. "CORS policy blocked"
- **Cause**: Opening file:// directly
- **Fix**: Use local server (see above)

### 3. "API Key: Present" but still 404
- **Cause**: API key might be invalid or expired
- **Fix**: Generate new API key in Venice AI dashboard

### 4. Tailwind CSS Warning
- **Cause**: Using CDN in production
- **Note**: This is just a warning, site still works
- **Fix**: For production, build Tailwind CSS locally (optional)

## Testing Checklist

- [ ] Using local server (not file://)
- [ ] Browser console open (F12)
- [ ] API key is correct
- [ ] Model name is correct (`venice-uncensored`)
- [ ] Check console for detailed error messages
- [ ] Try `test-venice-direct.html` for direct API testing

## Getting Help

If issues persist:
1. Check browser console (F12) for detailed error messages
2. Look for the `=== Venice API Request ===` logs
3. Check the response status and error details
4. Verify API key in Venice AI dashboard

