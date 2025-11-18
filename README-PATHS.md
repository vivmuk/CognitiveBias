# File Paths Guide

## Important: All paths are relative

All file references in this project use **relative paths**, which means they work correctly as long as you:

1. **Run the server from the `google cog bias` folder**
2. **Access files via `http://localhost:8000/...`**

## Correct Server Setup

### Start Server from Correct Directory:

```bash
# Navigate to the project folder FIRST
cd "c:\Users\vivga\OneDrive\AI\AI Projects\Cognitive BIas\google cog bias"

# Then start server
python -m http.server 8000
```

### Or Use the Batch File:

Double-click `start-server.bat` - it automatically navigates to the correct folder.

## File Structure

All files are in the same directory (`google cog bias/`), so paths are simple:

```
google cog bias/
├── bias-learning-hub.html    ← Main hub
├── bias-1.html to bias-99.html
├── all-99-biases.js          ← Referenced as "all-99-biases.js"
├── venice-api.js             ← Referenced as "venice-api.js"
├── styles.css                ← Referenced as "styles.css"
├── Cog/                      ← Referenced as "Cog/favicon.ico"
│   ├── favicon.ico
│   └── ...
└── test-venice-direct.html   ← Referenced as "test-venice-direct.html"
```

## Accessing Files

When server is running from `google cog bias/` folder:

✅ **Correct URLs:**
- http://localhost:8000/bias-learning-hub.html
- http://localhost:8000/test-venice-direct.html
- http://localhost:8000/bias-1.html

❌ **Wrong URLs:**
- http://localhost:8000/google%20cog%20bias/bias-learning-hub.html
- file:///C:/Users/.../bias-learning-hub.html

## Why Relative Paths Work

All HTML files use relative paths like:
- `href="Cog/favicon.ico"` (not `/Cog/favicon.ico` or absolute paths)
- `src="all-99-biases.js"` (not `/all-99-biases.js` or absolute paths)

This means:
- ✅ Works when server runs from `google cog bias/` folder
- ✅ Works on Netlify (all files in root)
- ✅ Works locally with any server

## Troubleshooting 404 Errors

If you get 404 errors:

1. **Check server is running**: Terminal should show "Serving HTTP on..."
2. **Check server directory**: Server must run from `google cog bias/` folder
3. **Check URL**: Use `http://localhost:8000/filename.html` (not file://)
4. **Verify file exists**: Check file is in `google cog bias/` folder

## Quick Test

1. Open terminal in `google cog bias/` folder
2. Run: `python -m http.server 8000`
3. Open browser: http://localhost:8000/bias-learning-hub.html
4. Should work! ✅

