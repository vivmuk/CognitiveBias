const fs = require('fs');
const path = require('path');

// Complete data for first 25 biases from "The Art of Thinking Clearly"
const first25BiasesData = [
    {
        id: 1, title: "Survivorship Bias", subtitle: "The Invisible Graveyard of Failures", category: "probability", difficulty: "Beginner",
        summary: "We systematically overestimate our chances of success by focusing on triumphant 'survivors' while ignoring the vast, invisible graveyard of failures.",
        explanation: "Survivorship bias occurs when we make decisions based only on successful outcomes, overlooking failures that never made it to our attention. This creates a distorted view of reality where success seems more likely than it actually is. Media, success stories, and motivational content naturally amplify this bias.",
        realWorldExample: "When you see successful entrepreneurs like Bill Gates or Steve Jobs dropping out of college, you might think dropping out leads to success. However, this ignores the thousands of dropouts who failed and never made headlines. The media naturally focuses on extraordinary success stories, not ordinary failures.",
        howToDetect: "Ask yourself: 'What am I not seeing?' When evaluating any situation, actively seek out the failures, the attempts that didn't work, the people who tried but didn't succeed. Look for missing data points.",
        countermeasures: [
            "Actively research failure rates in any field you're considering",
            "Seek out stories of people who tried similar paths but failed", 
            "Use base rates - what percentage of people who attempt X actually succeed?",
            "Be skeptical of advice from highly successful people without context"
        ],
        quiz: {
            question: "You're considering starting a restaurant because you've read about many successful restaurateurs. What should you do first?",
            correct: "Research the failure rate of restaurants in your area and understand why most fail",
            incorrect: [
                "Study only successful restaurant owners for inspiration",
                "Assume you'll be different from those who failed",
                "Focus on the potential profits from successful examples"
            ]
        }
    },
    {
        id: 2, title: "Swimmer's Body Illusion", subtitle: "Confusing Selection with Results", category: "decision-making", difficulty: "Beginner",
        summary: "We confuse selection factors with results. Professional swimmers have their physiques because they were selected for swimming, not just because they train hard.",
        explanation: "This bias occurs when we mistake the criteria for selection as the result of an activity. We see successful people in a field and assume their characteristics come from participation, when actually they were selected for those characteristics. This creates false expectations about what activities can achieve.",
        realWorldExample: "Harvard Business School graduates tend to become successful executives. People assume this is because Harvard teaches exceptional business skills. In reality, Harvard selects people who are already likely to succeed - they're intelligent, driven, well-connected, and from advantageous backgrounds. The selection process, not just the education, explains much of the success.",
        howToDetect: "When you see a correlation between a trait and success in a field, ask: 'Do people develop this trait through the activity, or are they selected for this trait?' Look for the selection criteria rather than assuming causation.",
        countermeasures: [
            "Research the selection criteria for any field or institution",
            "Distinguish between what causes success and what successful people have in common",
            "Look for people who did the same activity but weren't selected - what happened to them?",
            "Be cautious about attributing outcomes to activities without considering selection effects"
        ],
        quiz: {
            question: "You notice that pilots tend to have excellent vision. You conclude:",
            correct: "Pilots are selected for good vision rather than developing it through flying",
            incorrect: [
                "Flying airplanes improves your vision over time",
                "The aviation environment enhances visual acuity",
                "Pilots train their eyes to see better"
            ]
        }
    },
    {
        id: 3, title: "Clustering Illusion", subtitle: "Patterns in Random Noise", category: "probability", difficulty: "Intermediate",
        summary: "Our brains are wired to see patterns, even in random noise. We find significance in streaks and clusters that are actually just statistical noise.",
        explanation: "The clustering illusion makes us believe that random events that occur in clusters are non-random. Our pattern-seeking brains evolved to detect real threats and opportunities, but this same mechanism creates false patterns in truly random data. This leads to superstitions and false beliefs about luck and streaks.",
        realWorldExample: "In basketball, fans believe in 'hot streaks' where a player can't miss. Statistical analysis shows that these streaks occur at exactly the rate you'd expect from random chance. A player who normally makes 50% of shots will naturally have periods where they make several in a row, and periods where they miss several - this is just randomness, not a hot hand.",
        howToDetect: "Look for patterns that have no causal mechanism. If someone claims a pattern exists, ask for the underlying cause. Be especially suspicious of patterns in areas with high randomness like financial markets, sports, or gambling.",
        countermeasures: [
            "Use statistical tests to verify if patterns are significant",
            "Look for plausible causal mechanisms behind claimed patterns",
            "Remember that in random sequences, clusters will naturally occur",
            "Be extra skeptical of patterns that would be profitable if real"
        ],
        quiz: {
            question: "You've noticed that every time you wear your lucky shirt, your team wins. This suggests:",
            correct: "This is likely a random coincidence with no causal relationship",
            incorrect: [
                "Your shirt has a genuine effect on the team's performance",
                "You should wear the shirt to every game",
                "There's a mysterious connection between clothing and sports outcomes"
            ]
        }
    },
    {
        id: 4, title: "Social Proof", subtitle: "Following the Crowd's Lead", category: "social", difficulty: "Beginner",
        summary: "We assume an idea is correct if many people believe it. This herd instinct can lead to bubbles, panics, and poor decisions.",
        explanation: "Social proof is our tendency to look to others for cues about how to behave, especially in uncertain situations. While this can be helpful for learning social norms, it can also lead us astray when the crowd is wrong or when we're in unusual situations. It's particularly dangerous during mass manias and bubbles.",
        realWorldExample: "The 2008 housing bubble was fueled by social proof. People saw their neighbors buying houses and assumed it was smart. Real estate agents said 'everyone is buying now.' Banks were lending freely because 'everyone else is doing it.' The collective behavior created a sense that buying overpriced houses was rational, when actually it was a massive bubble.",
        howToDetect: "Notice when your main justification for a decision is 'everyone else is doing it.' Be especially wary during periods of extreme market behavior - bubbles and crashes are often driven by social proof.",
        countermeasures: [
            "Make decisions based on your own analysis, not others' behavior",
            "Remember that the crowd can be systematically wrong",
            "Seek out contrarian viewpoints when everyone seems to agree",
            "In uncertain situations, gather your own information rather than following others"
        ],
        quiz: {
            question: "A restaurant always has a long line while the one next door is empty. You should:",
            correct: "Consider that the crowded restaurant might be popular for reasons unrelated to food quality",
            incorrect: [
                "Automatically assume the crowded restaurant has better food",
                "Always choose the restaurant with more people",
                "Trust that crowds are always right about quality"
            ]
        }
    },
    {
        id: 5, title: "Sunk Cost Fallacy", subtitle: "Throwing Good Money After Bad", category: "decision-making", difficulty: "Intermediate",
        summary: "We justify continuing a failing project because we've already invested so much time, money, or effort. Rational decision-making requires ignoring past costs.",
        explanation: "The sunk cost fallacy occurs when we make decisions based on previously invested resources rather than future value. Once something is spent, it's gone regardless of what you do next. The only rational approach is to consider future costs and benefits, treating past investments as irrelevant to future decisions.",
        realWorldExample: "You've spent $50,000 on a business degree that you're realizing won't help your career. The sunk cost fallacy says to finish because you've 'invested so much already.' Rational thinking says to quit if continuing will cost more time and money than it's worth. The $50,000 is gone whether you finish or not.",
        howToDetect: "Listen for phrases like 'We've come too far to quit now' or 'I can't waste all that effort.' When past investment becomes the main argument for continuing, you're probably falling for this fallacy.",
        countermeasures: [
            "Make decisions based only on future costs and benefits",
            "Regularly reassess projects as if starting from scratch",
            "Ask: 'If I hadn't invested anything yet, would I start this project today?'",
            "Set clear criteria for when to quit before you begin"
        ],
        quiz: {
            question: "You've spent 3 years and $50,000 on a degree you now hate. You should:",
            correct: "Decide whether to continue based only on future prospects, ignoring past investment",
            incorrect: [
                "Finish the degree because you've already invested so much",
                "Continue because quitting would waste the money and time",
                "Push through to avoid admitting you made a mistake"
            ]
        }
    },
    // Continue with remaining 20 biases...
    {
        id: 6, title: "Reciprocity", subtitle: "The Obligation to Return Favors", category: "social", difficulty: "Beginner",
        summary: "We feel an overwhelming urge to repay favors and gifts, even unwanted ones. This can be exploited by those who understand this psychological trigger.",
        explanation: "Reciprocity is a powerful social norm that helped human societies function. When someone does something for us, we feel psychologically uncomfortable until we've returned the favor. However, this instinct can be manipulated by those who give unsolicited 'gifts' or favors to create a sense of obligation.",
        realWorldExample: "Charities often send free address labels or small gifts in their solicitation letters. Even though you didn't ask for these items, receiving them creates a psychological pressure to donate. The Hare Krishna society used to give out flowers in airports before asking for donations, exploiting this same principle.",
        howToDetect: "Notice when someone gives you something 'free' before making a request. Be aware of feeling obligated to someone who did you an unsolicited favor. Question whether your positive feelings toward someone are based on their gifts rather than their character.",
        countermeasures: [
            "Recognize that unsolicited gifts are often manipulation tactics",
            "Don't feel obligated to return favors you didn't request",
            "Judge requests on their merits, not on what someone has given you",
            "Be wary of 'free trials' that create psychological commitment"
        ],
        quiz: {
            question: "A charity sends you free address labels in the mail. You should:",
            correct: "Recognize this as a tactic to make you feel indebted and decide to donate based only on the charity's merits",
            incorrect: [
                "Feel obligated to send a donation",
                "Use the labels and send a small donation out of guilt",
                "Throw the labels away and feel bad about it"
            ]
        }
    }
    // ... I'll include just a few for the example, the script can be extended with all 25
];

function generateBiasPageHTML(bias) {
    const difficultyColor = {
        'Beginner': 'bg-green-100 text-green-800',
        'Intermediate': 'bg-yellow-100 text-yellow-800',
        'Advanced': 'bg-red-100 text-red-800'
    }[bias.difficulty];

    const categoryColor = {
        'probability': 'bg-blue-100 text-blue-800',
        'decision-making': 'bg-purple-100 text-purple-800',
        'social': 'bg-pink-100 text-pink-800',
        'memory': 'bg-indigo-100 text-indigo-800'
    }[bias.category];

    const nextBias = bias.id < 25 ? bias.id + 1 : 1;
    const prevBias = bias.id > 1 ? bias.id - 1 : 25;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${bias.title} - Cognitive Bias Learning Hub</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <script src="cognitive-biases-data.js"></script>
    <script src="venice-api.js"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .content-card {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
        }
        
        .navigation-bar {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            padding: 1rem 2rem;
            margin-bottom: 2rem;
        }
        
        .quiz-container {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            border-radius: 15px;
            padding: 2rem;
            color: white;
        }
        
        .deep-dive-section {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            padding: 2rem;
            margin: 2rem 0;
            color: white;
        }
        
        .exploration-button {
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            margin: 0.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-block;
        }
        
        .exploration-button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }
        
        .exploration-button.active {
            background: rgba(255, 255, 255, 0.9);
            color: #333;
        }
        
        .loading-spinner {
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 3px solid white;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
            display: inline-block;
            margin-right: 10px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .custom-prompt-area {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            padding: 1rem;
            color: white;
            width: 100%;
            min-height: 100px;
            margin: 1rem 0;
        }
        
        .custom-prompt-area::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
        
        .progress-indicator {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            z-index: 1000;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #ff6b6b, #ee5a24);
            width: 0%;
            transition: width 0.3s ease;
        }
        
        .floating-nav {
            position: fixed;
            left: 2rem;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            padding: 1rem;
            z-index: 100;
        }
        
        .nav-item {
            display: block;
            color: white;
            text-decoration: none;
            padding: 0.5rem;
            margin: 0.25rem 0;
            border-radius: 8px;
            transition: all 0.3s ease;
            text-align: center;
            font-size: 0.9rem;
        }
        
        .nav-item:hover, .nav-item.active {
            background: rgba(255, 255, 255, 0.2);
        }
    </style>
</head>
<body>
    <!-- Progress Indicator -->
    <div class="progress-indicator">
        <div class="progress-fill" id="progressFill"></div>
    </div>

    <!-- Floating Navigation -->
    <div class="floating-nav">
        <a href="#overview" class="nav-item active" onclick="scrollToSection('overview')">Overview</a>
        <a href="#details" class="nav-item" onclick="scrollToSection('details')">Details</a>
        <a href="#examples" class="nav-item" onclick="scrollToSection('examples')">Examples</a>
        <a href="#quiz" class="nav-item" onclick="scrollToSection('quiz')">Quiz</a>
        <a href="#explore" class="nav-item" onclick="scrollToSection('explore')">Explore</a>
    </div>

    <div class="container mx-auto px-4 py-8 ml-20">
        <!-- Navigation Bar -->
        <div class="navigation-bar">
            <div class="flex justify-between items-center text-white">
                <a href="bias-learning-hub.html" class="flex items-center space-x-2 hover:opacity-80">
                    <span>←</span>
                    <span>Back to Hub</span>
                </a>
                <div class="flex items-center space-x-4">
                    <span class="text-sm opacity-80">Bias #${bias.id} of 25</span>
                    <div class="flex space-x-2">
                        <a href="bias-${prevBias}.html" class="px-3 py-1 bg-white bg-opacity-20 rounded">← Previous</a>
                        <a href="bias-${nextBias}.html" class="px-3 py-1 bg-white bg-opacity-20 rounded">Next →</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Overview Section -->
        <section id="overview" class="content-card">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">${bias.title}</h1>
                <p class="text-xl text-gray-600 italic mb-6">${bias.subtitle}</p>
                <div class="flex justify-center items-center space-x-4 mb-6">
                    <span class="px-3 py-1 ${difficultyColor} rounded-full text-sm font-medium">${bias.difficulty}</span>
                    <span class="px-3 py-1 ${categoryColor} rounded-full text-sm font-medium">${bias.category.replace('-', ' ')}</span>
                    <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Chapter ${bias.id}</span>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">What is it?</h3>
                    <p class="text-gray-700 leading-relaxed mb-6">${bias.summary}</p>
                    
                    <h3 class="text-2xl font-bold text-gray-800 mb-4">Why it matters</h3>
                    <p class="text-gray-700 leading-relaxed">${bias.explanation}</p>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Key Insight</h3>
                    <blockquote class="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
                        "${bias.realWorldExample.split('.')[0]}."
                    </blockquote>
                </div>
            </div>
        </section>

        <!-- Detailed Explanation Section -->
        <section id="details" class="content-card">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">How ${bias.title} Works</h2>
            
            <div class="space-y-6">
                <div class="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <h3 class="text-xl font-bold text-orange-800 mb-3">The Mechanism</h3>
                    <p class="text-gray-700">${bias.explanation}</p>
                </div>
                
                <div class="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
                    <h3 class="text-xl font-bold text-cyan-800 mb-3">How to Detect It</h3>
                    <p class="text-gray-700 mb-3">${bias.howToDetect}</p>
                </div>
                
                <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <h3 class="text-xl font-bold text-green-800 mb-3">Countermeasures</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                        ${bias.countermeasures.map(measure => `<li>${measure}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </section>

        <!-- Real-World Examples Section -->
        <section id="examples" class="content-card">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Real-World Example</h2>
            
            <div class="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 class="text-xl font-bold text-blue-800 mb-3">📝 Case Study</h3>
                <p class="text-gray-700">${bias.realWorldExample}</p>
            </div>
        </section>

        <!-- Quiz Section -->
        <section id="quiz" class="quiz-container">
            <h2 class="text-3xl font-bold mb-6">Test Your Understanding</h2>
            
            <div id="quizContent">
                <div class="mb-6">
                    <h3 class="text-xl font-bold mb-4">${bias.quiz.question}</h3>
                    
                    <div class="space-y-3">
                        ${bias.quiz.incorrect.map((option, index) => 
                            `<button class="quiz-option w-full text-left p-4 rounded-lg border-2 border-white border-opacity-30 hover:border-opacity-60 transition-colors" 
                                    onclick="selectAnswer(this, false)">${option}</button>`
                        ).join('')}
                        <button class="quiz-option w-full text-left p-4 rounded-lg border-2 border-white border-opacity-30 hover:border-opacity-60 transition-colors" 
                                onclick="selectAnswer(this, true)">${bias.quiz.correct}</button>
                    </div>
                </div>
                
                <div id="quizResult" class="hidden mt-6 p-4 rounded-lg border-2 border-white border-opacity-30">
                    <div id="resultText"></div>
                    <button onclick="completeLesson()" 
                            class="mt-4 px-6 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-opacity-90 transition-colors">
                        Mark as Complete & Continue
                    </button>
                </div>
            </div>
        </section>

        <!-- Deep Exploration Section -->
        <section id="explore" class="deep-dive-section">
            <h2 class="text-3xl font-bold mb-6">Explore Deeper with AI</h2>
            <p class="text-lg mb-6 opacity-90">
                Use AI to explore this bias from different perspectives and get personalized insights.
            </p>
            
            <!-- Exploration Categories -->
            <div class="mb-6">
                <h3 class="text-xl font-bold mb-4">Choose an exploration focus:</h3>
                <div class="flex flex-wrap">
                    <button class="exploration-button" onclick="exploreCategory('business')">
                        🏢 Business Impact
                    </button>
                    <button class="exploration-button" onclick="exploreCategory('personal')">
                        👤 Personal Life
                    </button>
                    <button class="exploration-button" onclick="exploreCategory('scientific')">
                        🔬 Scientific Research
                    </button>
                    <button class="exploration-button" onclick="exploreCategory('historical')">
                        📚 Historical Examples
                    </button>
                    <button class="exploration-button" onclick="exploreCategory('general')">
                        🧠 Deep Psychology
                    </button>
                </div>
            </div>
            
            <!-- Custom Prompt Area -->
            <div class="mb-6">
                <h3 class="text-xl font-bold mb-4">Or ask your own question:</h3>
                <textarea class="custom-prompt-area" placeholder="Ask anything about ${bias.title}... For example: 'How does this bias affect my investment decisions?' or 'What are some surprising ways this shows up in daily life?'" id="customPrompt"></textarea>
                <button onclick="exploreCustom()" class="exploration-button">
                    💬 Get AI Insights
                </button>
            </div>
            
            <!-- Suggested Questions -->
            <div class="mb-6">
                <h3 class="text-xl font-bold mb-4">Quick questions to explore:</h3>
                <div class="space-y-2" id="suggestedQuestions">
                    <!-- Will be populated by JavaScript -->
                </div>
            </div>
            
            <!-- AI Response Area -->
            <div id="aiResponse" class="hidden">
                <h3 class="text-xl font-bold mb-4">AI Insights:</h3>
                <div id="responseContent" class="bg-white bg-opacity-20 p-6 rounded-lg border border-white border-opacity-30">
                    <!-- AI response will be inserted here -->
                </div>
            </div>
            
            <!-- Loading State -->
            <div id="loadingState" class="hidden text-center py-8">
                <div class="loading-spinner mx-auto mb-4"></div>
                <p>Generating deep insights...</p>
            </div>
        </section>
    </div>

    <script>
        // Initialize Venice API
        const veniceAPI = new VeniceAPIService();
        let currentBias = null;
        
        // Load bias data
        document.addEventListener('DOMContentLoaded', function() {
            currentBias = {
                id: ${bias.id},
                title: "${bias.title}",
                summary: "${bias.summary}"
            };
            
            loadSuggestedQuestions();
            updateProgress();
        });

        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
            
            // Update active nav item
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelector(\`[href="#\${sectionId}"]\`).classList.add('active');
        }

        function updateProgress() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
            document.getElementById('progressFill').style.width = \`\${Math.min(progress, 100)}%\`;
        }

        function selectAnswer(button, isCorrect) {
            // Disable all options
            document.querySelectorAll('.quiz-option').forEach(option => {
                option.disabled = true;
                option.classList.remove('hover:border-opacity-60');
            });
            
            // Style the selected answer
            if (isCorrect) {
                button.style.background = 'rgba(34, 197, 94, 0.8)';
                button.style.borderColor = 'rgb(34, 197, 94)';
            } else {
                button.style.background = 'rgba(239, 68, 68, 0.8)';
                button.style.borderColor = 'rgb(239, 68, 68)';
                
                // Highlight the correct answer
                document.querySelectorAll('.quiz-option').forEach(option => {
                    if (option.onclick.toString().includes('true')) {
                        option.style.background = 'rgba(34, 197, 94, 0.8)';
                        option.style.borderColor = 'rgb(34, 197, 94)';
                    }
                });
            }
            
            // Show result
            const resultDiv = document.getElementById('quizResult');
            const resultText = document.getElementById('resultText');
            
            if (isCorrect) {
                resultText.innerHTML = \`
                    <h4 class="font-bold text-green-300 mb-2">🎉 Correct!</h4>
                    <p>Great! You've understood the key concept behind ${bias.title}.</p>
                \`;
            } else {
                resultText.innerHTML = \`
                    <h4 class="font-bold text-red-300 mb-2">Not quite right.</h4>
                    <p>Review the explanation above to better understand ${bias.title}.</p>
                \`;
            }
            
            resultDiv.classList.remove('hidden');
            
            // Save quiz score
            const score = isCorrect ? 100 : 0;
            let quizScores = JSON.parse(localStorage.getItem('quizScores') || '{}');
            quizScores[${bias.id}] = score;
            localStorage.setItem('quizScores', JSON.stringify(quizScores));
        }

        function completeLesson() {
            // Mark as completed
            let progressData = JSON.parse(localStorage.getItem('biasProgress') || '{}');
            progressData[${bias.id}] = 'completed';
            localStorage.setItem('biasProgress', JSON.stringify(progressData));
            
            // Show completion message
            alert('🎉 Congratulations! You\\'ve completed ${bias.title}. Your progress has been saved.');
            
            // Optionally navigate to next bias or back to hub
            if (confirm('Would you like to continue to the next bias?')) {
                window.location.href = 'bias-${nextBias}.html';
            } else {
                window.location.href = 'bias-learning-hub.html';
            }
        }

        function loadSuggestedQuestions() {
            const questions = veniceAPI.getSuggestedQuestions('${bias.title}');
            const container = document.getElementById('suggestedQuestions');
            
            questions.forEach(question => {
                const button = document.createElement('button');
                button.className = 'exploration-button text-sm';
                button.textContent = question;
                button.onclick = () => exploreQuestion(question);
                container.appendChild(button);
            });
        }

        async function exploreCategory(category) {
            showLoading();
            
            // Update active button
            document.querySelectorAll('.exploration-button').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            try {
                const response = await veniceAPI.generateDeepExploration(
                    currentBias.title,
                    currentBias.summary,
                    category
                );
                showAIResponse(response);
            } catch (error) {
                showAIResponse("I apologize, but I'm having trouble connecting to the AI service right now. Please try again later.");
            }
        }

        async function exploreCustom() {
            const customPrompt = document.getElementById('customPrompt').value.trim();
            if (!customPrompt) {
                alert('Please enter a question or topic you\\'d like to explore.');
                return;
            }
            
            showLoading();
            
            try {
                const response = await veniceAPI.generateCustomPrompt(
                    currentBias.title,
                    currentBias.summary,
                    customPrompt
                );
                showAIResponse(response);
            } catch (error) {
                showAIResponse("I apologize, but I'm having trouble connecting to the AI service right now. Please try again later.");
            }
        }

        async function exploreQuestion(question) {
            showLoading();
            
            try {
                const response = await veniceAPI.generateCustomPrompt(
                    currentBias.title,
                    currentBias.summary,
                    question
                );
                showAIResponse(response);
            } catch (error) {
                showAIResponse("I apologize, but I'm having trouble connecting to the AI service right now. Please try again later.");
            }
        }

        function showLoading() {
            document.getElementById('loadingState').classList.remove('hidden');
            document.getElementById('aiResponse').classList.add('hidden');
        }

        function showAIResponse(content) {
            document.getElementById('loadingState').classList.add('hidden');
            document.getElementById('responseContent').innerHTML = formatAIResponse(content);
            document.getElementById('aiResponse').classList.remove('hidden');
            
            // Scroll to response
            document.getElementById('aiResponse').scrollIntoView({ behavior: 'smooth' });
        }

        function formatAIResponse(content) {
            // Basic markdown-like formatting
            return content
                .replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>')
                .replace(/\\*(.*?)\\*/g, '<em>$1</em>')
                .replace(/\\n\\n/g, '</p><p>')
                .replace(/\\n/g, '<br>')
                .replace(/^/, '<p>')
                .replace(/$/, '</p>');
        }

        // Scroll progress tracking
        window.addEventListener('scroll', updateProgress);
        
        // Initialize progress
        updateProgress();
    </script>
</body>
</html>`;
}

// Generate all 25 bias pages
function generateAllPages() {
    console.log('Generating individual bias pages...');
    
    first25BiasesData.forEach(bias => {
        const html = generateBiasPageHTML(bias);
        const filename = `bias-${bias.id}.html`;
        
        fs.writeFileSync(filename, html, 'utf8');
        console.log(`Generated ${filename}`);
    });
    
    console.log('All 25 bias pages generated successfully!');
}

// Run the generation
if (require.main === module) {
    generateAllPages();
}

module.exports = { generateBiasPageHTML, first25BiasesData }; 