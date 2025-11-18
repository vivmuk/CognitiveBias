# Cognitive Bias Learning Hub

A comprehensive interactive learning platform for exploring all 99 cognitive biases from "The Art of Thinking Clearly" by Rolf Dobelli.

## Features

- 📚 **99 Complete Cognitive Biases** - All biases with detailed explanations, examples, and quizzes
- 🤖 **AI-Powered Exploration** - Deep dive into each bias using Venice AI (Llama 3.1 405B)
- 📊 **Progress Tracking** - Track your learning progress with local storage
- 🔍 **Search & Filter** - Find biases by category (Decision-Making, Social, Memory, Probability) or keyword
- 🎯 **Interactive Quizzes** - Test your understanding of each bias
- 💡 **Real-World Examples** - Practical case studies for each bias

## 🚀 Live Deployment

**Deployed on Netlify**: [View Live Site](https://your-site-name.netlify.app)

The site is ready for deployment. See [NETLIFY-DEPLOY.md](./NETLIFY-DEPLOY.md) for deployment instructions.

## Quick Start

### Option 1: Simple File Opening
1. Open `bias-learning-hub.html` in your web browser
2. Note: Some features may require a local server due to CORS

### Option 2: Local Web Server (Recommended)

#### Using Python:
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000/bias-learning-hub.html`

#### Using Node.js:
```bash
npm install -g http-server
http-server -p 8000
```

#### Using VS Code:
Install "Live Server" extension and right-click `bias-learning-hub.html` → "Open with Live Server"

## AI Integration

The platform uses Venice AI for deep exploration of cognitive biases. Each bias page includes:

- 🏢 **Business Impact** - How biases affect business decisions
- 👤 **Personal Life** - Daily life applications
- 🔬 **Scientific Research** - Evidence-based insights
- 📚 **Historical Examples** - Real-world case studies
- 🧠 **Deep Psychology** - Advanced psychological mechanisms
- 💬 **Custom Questions** - Ask anything about any bias

## File Structure

```
├── bias-learning-hub.html      # Main hub page
├── bias-1.html to bias-99.html # Individual bias pages
├── all-99-biases.js            # Complete bias data (all 99 biases)
├── venice-api.js               # Venice AI integration
├── styles.css                  # Styling
├── test-venice-api.html         # API test page
├── netlify.toml                # Netlify configuration
├── _redirects                   # Netlify redirects
├── index.html                   # Landing page (redirects to hub)
├── generate-all-bias-pages.js  # Script to generate bias pages
└── update-existing-pages.js   # Script to update existing pages
```

## Testing Venice AI

1. Open `test-venice-api.html` in your browser
2. Click the test buttons to verify API connectivity
3. Check browser console (F12) for any errors

## Technologies Used

- **HTML5/CSS3** - Structure and styling
- **JavaScript** - Interactivity and data management
- **Tailwind CSS** - Utility-first CSS framework
- **Venice AI** - AI-powered deep exploration (Llama 3.1 405B)
- **Local Storage** - Progress tracking

## Features Breakdown

### Learning Hub
- Grid view of all 99 biases
- Search functionality
- Category filtering
- Progress statistics
- Completion tracking

### Individual Bias Pages
- Overview with summary and explanation
- Detailed mechanism explanation
- Detection methods
- Countermeasures
- Real-world examples
- Interactive quiz
- AI-powered exploration

## Contributing

This is a personal learning project based on "The Art of Thinking Clearly" by Rolf Dobelli.

## License

Educational use only. Based on concepts from "The Art of Thinking Clearly" by Rolf Dobelli.

## Acknowledgments

- Rolf Dobelli for "The Art of Thinking Clearly"
- Venice AI for providing the AI exploration capabilities
