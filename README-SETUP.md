# Cognitive Bias Learning Hub

A comprehensive interactive learning platform for mastering the first 25 cognitive biases from "The Art of Thinking Clearly" by Rolf Dobelli, featuring AI-powered deep exploration via Venice API.

## 🚀 Features

### 🎯 **Individual Bias Pages**
- **25 Complete Lessons**: Each bias has its own dedicated page with detailed explanations
- **Interactive Quizzes**: Test your understanding with carefully crafted questions
- **Progress Tracking**: Your completion status and quiz scores are saved locally
- **Beautiful UI**: Modern glassmorphism design with smooth animations

### 🤖 **AI-Powered Deep Exploration**
- **Venice API Integration**: Powered by Llama 405B for deep insights
- **Multiple Perspectives**: Explore each bias from business, personal, scientific, and historical angles
- **Custom Questions**: Ask anything about any bias and get intelligent responses
- **Suggested Prompts**: Quick-start questions to dive deeper into each topic

### 📊 **Learning Dashboard**
- **Progress Ring**: Visual progress indicator showing completion percentage
- **Statistics Tracking**: Completed biases, quiz averages, and learning streaks
- **Category Filtering**: Filter biases by decision-making, social, memory, or probability
- **Search Functionality**: Quickly find specific biases or topics

### 🎨 **Modern User Experience**
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark/Light Themes**: Toggle between themes for comfortable reading
- **Floating Navigation**: Easy section jumping with smooth scrolling
- **Progress Indicators**: Real-time scroll progress on each lesson

## 📁 Project Structure

```
cognitive-bias-hub/
├── bias-learning-hub.html          # Main landing page with progress tracking
├── bias-1.html through bias-25.html # Individual bias lesson pages
├── venice-api.js                    # Venice AI API service
├── cognitive-biases-data.js         # Complete bias data and content
├── styles.css                       # Enhanced styling and themes
├── generate-bias-pages.js           # Page generation script
└── README-SETUP.md                  # This setup guide
```

## 🛠️ Setup Instructions

### 1. **File Organization**
All files should be in the same directory. The main entry point is `bias-learning-hub.html`.

### 2. **Venice API Configuration**
The Venice API key is already configured in `venice-api.js`:
- **Model**: Llama 3.1 405B (most intelligent option)
- **API Key**: Pre-configured and ready to use
- **Features**: Deep exploration, custom prompts, suggested questions

### 3. **Running the Application**
Simply open `bias-learning-hub.html` in any modern web browser. No server required!

```bash
# Option 1: Direct file opening
open bias-learning-hub.html

# Option 2: Simple HTTP server (optional)
python -m http.server 8000
# Then visit: http://localhost:8000/bias-learning-hub.html
```

## 📚 How to Use

### **Starting Your Learning Journey**
1. Open `bias-learning-hub.html` in your browser
2. Browse the grid of 25 cognitive biases
3. Click any bias card to start learning
4. Use filters and search to find specific topics

### **Learning Each Bias**
1. **Overview**: Read the basic explanation and key insights
2. **Details**: Understand the psychological mechanisms
3. **Examples**: See real-world applications and case studies
4. **Quiz**: Test your comprehension with interactive questions
5. **Explore**: Use AI to dive deeper with personalized insights

### **AI Exploration Features**
- **Quick Categories**: Choose from Business, Personal, Scientific, Historical, or Deep Psychology
- **Custom Questions**: Ask anything like "How does this affect my investment decisions?"
- **Suggested Prompts**: Use pre-generated questions for inspiration
- **Follow-up Exploration**: Build on previous answers for deeper understanding

### **Progress Tracking**
- Your progress is automatically saved in browser localStorage
- Quiz scores are tracked for each bias
- Completion status is visually indicated with checkmarks and colors
- Reset progress anytime with the floating reset button

## 🎯 The First 25 Cognitive Biases

1. **Survivorship Bias** - The Invisible Graveyard of Failures
2. **Swimmer's Body Illusion** - Confusing Selection with Results
3. **Clustering Illusion** - Patterns in Random Noise
4. **Social Proof** - Following the Crowd's Lead
5. **Sunk Cost Fallacy** - Throwing Good Money After Bad
6. **Reciprocity** - The Obligation to Return Favors
7. **Confirmation Bias (Part 1)** - Seeking Information That Confirms Our Beliefs
8. **Confirmation Bias (Part 2)** - The Antidote: Seeking Disconfirming Evidence
9. **Authority Bias** - Blindly Following the Experts
10. **Contrast Effect** - Judgment by Comparison
11. **Availability Heuristic** - What Comes to Mind First
12. **The It'll-Get-Worse-Before-It-Gets-Better Fallacy** - False Hope in Decline
13. **Story Bias** - The Power of Narrative
14. **Hindsight Bias** - The I-Knew-It-All-Along Effect
15. **Overconfidence Effect** - Thinking We Know More Than We Do
16. **Chauffeur Knowledge** - Confusing Eloquence with Understanding
17. **Illusion of Control** - Believing We Can Influence the Uncontrollable
18. **Incentive Super-Response Tendency** - Following the Money
19. **Regression to the Mean** - Extreme Performance Tends to Normalize
20. **Outcome Bias** - Judging Decisions by Results
21. **The Paradox of Choice** - When More Options Make Us Less Happy
22. **Liking Bias** - Buying from People We Like
23. **Endowment Effect** - Overvaluing What We Own
24. **Coincidence** - Why Unlikely Events Are Likely
25. **Groupthink** - Why Groups Make Bad Decisions

## 🔧 Customization

### **Adding More Biases**
To extend beyond the first 25 biases:
1. Add bias data to `cognitive-biases-data.js`
2. Update the total count in `bias-learning-hub.html`
3. Run the page generator script to create new individual pages

### **Modifying AI Prompts**
Edit the prompts in `venice-api.js` to customize the AI exploration experience:
- Change exploration categories
- Modify prompt templates
- Add new suggested questions

### **Styling Customization**
The design uses CSS custom properties for easy theming:
- Edit `styles.css` for global changes
- Modify gradient backgrounds in individual pages
- Customize the glassmorphism effects

## 🧠 Learning Strategy

### **Recommended Approach**
1. **Sequential Learning**: Start with Bias #1 and work through in order
2. **Daily Practice**: Learn 1-2 biases per day for consistent progress
3. **AI Exploration**: Use different perspectives for each bias
4. **Real-World Application**: Look for these biases in your daily life
5. **Review and Reflect**: Revisit completed biases periodically

### **Study Tips**
- Take notes on personal examples of each bias
- Discuss biases with friends and family
- Apply countermeasures in real situations
- Use the quiz results to identify areas for review
- Explore business applications if you're an entrepreneur or professional

## 🎨 Design Philosophy

The interface is designed with cognitive psychology principles in mind:
- **Reduced Cognitive Load**: Clean, uncluttered design
- **Visual Hierarchy**: Important information stands out
- **Progress Feedback**: Immediate feedback on actions and progress
- **Engaging Interactions**: Smooth animations and responsive design
- **Accessibility**: High contrast, readable fonts, keyboard navigation

## 📱 Browser Compatibility

Tested and optimized for:
- **Chrome/Edge** (Recommended)
- **Firefox**
- **Safari**
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Data

- **Local Storage Only**: All progress data is stored locally in your browser
- **No Tracking**: No analytics or user tracking
- **Venice API**: Only bias-related queries are sent to the AI service
- **Offline Capable**: Core functionality works without internet (except AI features)

## 🤝 Contributing

To extend or improve the project:
1. Add new bias data following the existing structure
2. Enhance AI prompts for better insights
3. Improve responsive design for various screen sizes
4. Add new exploration categories or features

## 📧 Support

If you encounter issues:
1. Check browser console for JavaScript errors
2. Verify internet connection for AI features
3. Clear browser cache if progress tracking seems broken
4. Ensure all files are in the same directory

---

**Happy Learning! Master your thinking and make better decisions by understanding these fundamental cognitive biases.** 🧠✨ 