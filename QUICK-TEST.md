# Quick Test Guide

## Start Local Server

**Option 1: Use the batch file**
- Double-click `start-server.bat`

**Option 2: Python command**
```bash
cd "c:\Users\vivga\OneDrive\AI\AI Projects\Cognitive BIas\google cog bias"
python -m http.server 8000
```

## Access Test Pages

Once server is running, open in browser:

1. **Main Hub**: http://localhost:8000/bias-learning-hub.html
2. **Venice API Test**: http://localhost:8000/test-venice-direct.html
3. **Venice API Test (via service)**: http://localhost:8000/test-venice-api.html

## Testing Venice API

1. Open http://localhost:8000/test-venice-direct.html
2. Open browser console (F12)
3. Click "Test Simple Request"
4. Check console for detailed logs

## Common Issues

### 404 File Not Found
- **Cause**: Server not running or wrong URL
- **Fix**: Make sure server is running on port 8000
- **Verify**: Check terminal shows "Serving HTTP on 0.0.0.0 port 8000"

### CORS Errors
- **Cause**: Opening file:// directly
- **Fix**: Always use http://localhost:8000/...

### Venice API 404
- **Cause**: API key or endpoint issue
- **Fix**: Check console logs for exact error message
- **Verify**: API key is correct in venice-api.js

