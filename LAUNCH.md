# How to Launch the Cognitive Bias Learning Hub

## Quick Start

### Option 1: Simple File Opening (Basic Testing)
1. Double-click `bias-learning-hub.html` to open it in your default browser
2. **Note**: Some features may not work due to CORS restrictions when opening files directly

### Option 2: Local Web Server (Recommended)

#### Using the Batch File (Easiest):
- Double-click `start-server.bat`
- Open: `http://localhost:8000/bias-learning-hub.html`

#### Using Python (if installed):
```bash
# Navigate to the project folder
cd "c:\Users\vivga\OneDrive\AI\AI Projects\Cognitive BIas"

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000/bias-learning-hub.html`

#### Using Node.js (if installed):
```bash
# Install http-server globally (one time)
npm install -g http-server

# Navigate to the project folder
cd "c:\Users\vivga\OneDrive\AI\AI Projects\Cognitive BIas"

# Start server
http-server -p 8000
```

Then open: `http://localhost:8000/bias-learning-hub.html`

#### Using VS Code Live Server:
1. Install the "Live Server" extension in VS Code
2. Right-click on `bias-learning-hub.html`
3. Select "Open with Live Server"

## Testing Venice AI Integration

1. First, test the API connection:
   - Open `test-venice-api.html` in your browser
   - Click the test buttons to verify Venice AI is working
   - Check the browser console (F12) for any errors

2. If you see API errors:
   - Verify the API key in `venice-api.js` is valid
   - Check your internet connection
   - Ensure CORS is not blocking the requests (use a local server)

## Features Available

✅ **99 Cognitive Biases** - All biases from "The Art of Thinking Clearly"
✅ **Interactive Learning** - Detailed explanations, examples, and quizzes
✅ **AI-Powered Exploration** - Deep dives using Venice AI (Llama 3.1 405B)
✅ **Progress Tracking** - Save your learning progress locally
✅ **Search & Filter** - Find biases by category or keyword

## AI Exploration Features

Each bias page includes:
- 🏢 Business Impact analysis
- 👤 Personal Life applications
- 🔬 Scientific Research insights
- 📚 Historical Examples
- 🧠 Deep Psychology exploration
- 💬 Custom question support

## Troubleshooting

### Venice AI Not Working?
1. Check `venice-api.js` has a valid API key
2. Test using `test-venice-api.html`
3. Check browser console (F12) for errors
4. Ensure you're using a local server (not file://)

### Pages Not Loading?
1. Ensure `all-99-biases.js` is in the same folder
2. Check browser console for JavaScript errors
3. Verify all files are in the repository root folder

### Navigation Issues?
- All pages should link correctly
- Previous/Next buttons cycle through all 99 biases
- Hub page shows all biases with search/filter

## File Structure

```
Cognitive BIas/
├── bias-learning-hub.html      # Main hub page
├── bias-1.html to bias-99.html # Individual bias pages
├── all-99-biases.js            # All bias data
├── venice-api.js               # Venice AI integration
├── styles.css                  # Styling
├── test-venice-api.html         # API test page
├── Cog/                        # Favicon and app icons
└── generate-all-bias-pages.js  # Page generator script
```

## Next Steps

1. Launch the hub using one of the methods above
2. Test the Venice AI integration
3. Explore any bias to see the AI features in action
4. Use the search and filter to find specific biases

Enjoy learning about cognitive biases! 🧠

