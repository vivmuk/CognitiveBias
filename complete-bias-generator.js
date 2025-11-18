const fs = require('fs');

// Complete list of first 25 biases from "The Art of Thinking Clearly"
const complete25Biases = [
    // 1-6 already created above, continuing with 7-25
    {
        id: 7, title: "Confirmation Bias (Part 1)", subtitle: "Seeking Information That Confirms Our Beliefs", category: "decision-making", difficulty: "Advanced",
        summary: "We tend to interpret new information in a way that confirms our existing beliefs and theories. We filter out contradictory evidence. This is the mother of all misconceptions.",
        explanation: "Confirmation bias is our tendency to search for, interpret, and remember information that confirms our pre-existing beliefs. We give more weight to evidence that supports our views and dismiss or rationalize away evidence that contradicts them. This creates echo chambers and prevents us from updating our beliefs when we should.",
        realWorldExample: "During political campaigns, supporters of each candidate tend to interpret the same debate performance differently. If you support Candidate A, you'll likely think they won the debate and find reasons why their answers were better. If you support Candidate B, you'll reach the opposite conclusion from the same evidence.",
        howToDetect: "Notice when you immediately look for reasons why information that contradicts your beliefs is wrong. Pay attention to whether you apply the same standards of evidence to information that supports vs. challenges your views.",
        countermeasures: [
            "Actively seek out information that challenges your beliefs",
            "Ask yourself: 'What would convince me I'm wrong?'",
            "Consume news and information from diverse sources",
            "Practice steelmanning - presenting opposing arguments in their strongest form"
        ],
        quiz: {
            question: "You believe that all politicians are corrupt. When a politician does a good deed, you think:",
            correct: "'This is an interesting piece of counter-evidence to my theory.'",
            incorrect: [
                "'He's just doing that for show, he's still corrupt underneath.'",
                "'This is a rare exception that proves the rule.'",
                "'This doesn't change my overall view.'"
            ]
        }
    },
    {
        id: 8, title: "Confirmation Bias (Part 2)", subtitle: "The Antidote: Seeking Disconfirming Evidence", category: "decision-making", difficulty: "Advanced",
        summary: "To fight confirmation bias, you must actively seek out 'disconfirming evidence.' Try to disprove your own theories. As the saying goes, 'murder your darlings.'",
        explanation: "The most effective way to combat confirmation bias is to actively look for evidence that would prove you wrong. This requires intellectual humility and the courage to challenge your own beliefs. Scientists do this through rigorous testing and peer review, but we can apply the same principle to our daily thinking.",
        realWorldExample: "If you believe that a particular investment strategy always works, don't just look for success stories. Actively search for times when that strategy failed. Research what conditions cause it to break down. This disconfirming evidence will give you a more realistic picture than success stories alone.",
        howToDetect: "Ask yourself if you're spending equal effort looking for evidence against your position as you are looking for evidence that supports it. Notice if you dismiss contradictory evidence too quickly.",
        countermeasures: [
            "Before researching a topic, write down what evidence would change your mind",
            "Actively search for credible sources that disagree with your position",
            "Practice devil's advocate - argue against your own position",
            "When you find disconfirming evidence, resist the urge to dismiss it immediately"
        ],
        quiz: {
            question: "To truly test your investment strategy that 'tech stocks always go up,' you should:",
            correct: "Actively search for data on tech stocks that have failed or stagnated",
            incorrect: [
                "Only look at the performance of successful tech stocks like Apple and Google",
                "Ask friends who have also made money on tech stocks",
                "Read more articles that support your theory"
            ]
        }
    },
    {
        id: 9, title: "Authority Bias", subtitle: "Blindly Following the Experts", category: "social", difficulty: "Intermediate",
        summary: "We are more likely to believe and obey figures of authority, even when they are wrong. Challenge experts and think for yourself. Their track records are often more sobering than you'd think.",
        explanation: "Authority bias makes us defer to experts and authority figures even when their expertise isn't relevant to the situation at hand. While respecting genuine expertise is rational, we often extend this respect too far, believing authorities in areas outside their competence or when their track record is poor.",
        realWorldExample: "During the 2008 financial crisis, many investors continued to follow the advice of financial experts and rating agencies even as their predictions proved repeatedly wrong. People assumed that because these figures had authority and credentials, their advice must be sound, despite mounting evidence to the contrary.",
        howToDetect: "Notice when you accept information simply because it comes from an authority figure. Ask whether their expertise is relevant to the specific claim they're making. Check their track record in making similar predictions or recommendations.",
        countermeasures: [
            "Evaluate ideas based on evidence, not on who says them",
            "Research the track record of experts in their predictions",
            "Remember that expertise in one area doesn't transfer to other areas",
            "Ask for the reasoning behind expert opinions, not just the conclusions"
        ],
        quiz: {
            question: "A famous Nobel Prize-winning economist predicts a stock market crash. You should:",
            correct: "Be skeptical and remember that experts are often wrong in their forecasts, especially about complex systems",
            incorrect: [
                "Sell all your stocks immediately",
                "Trust the prediction because he is a Nobel laureate",
                "Assume the crash is inevitable"
            ]
        }
    },
    {
        id: 10, title: "Contrast Effect", subtitle: "Judgment by Comparison", category: "decision-making", difficulty: "Beginner",
        summary: "Our judgment is heavily influenced by comparisons. A $3,000 option seems cheap next to a $60,000 car. Judge things on their own merit, not just in contrast to what's next to them.",
        explanation: "The contrast effect occurs when our perception of something is influenced by what we compare it to. Retailers, negotiators, and marketers exploit this by showing extreme options first to make moderate options seem reasonable. This prevents us from judging things on their absolute merits.",
        realWorldExample: "Real estate agents often show buyers overpriced houses first. After seeing a terrible house for $800,000, a mediocre house for $600,000 seems like a great deal. However, the $600,000 house might still be overpriced in absolute terms - you're just judging it relative to the terrible option you saw first.",
        howToDetect: "Notice when you're making decisions based on comparisons rather than absolute value. Be especially wary when someone presents you with extreme options before showing you what they really want to sell.",
        countermeasures: [
            "Research the market value of items independently before seeing options",
            "Judge things on their own merits, not relative to other options presented",
            "Be skeptical of 'anchoring' prices that seem designed to make other options look good",
            "Take time between seeing different options to avoid immediate contrast effects"
        ],
        quiz: {
            question: "A real estate agent shows you a rundown house for $500,000 right after showing you a similar, but slightly nicer, house for $1,200,000. The first house now seems like:",
            correct: "A house that should be judged on its own objective value, regardless of the other property",
            incorrect: [
                "An amazing bargain",
                "A must-buy opportunity",
                "Much better than it actually is"
            ]
        }
    }
    // Continue with remaining biases...
];

// Generate remaining bias pages (11-25)
const remainingBiases = [
    {
        id: 11, title: "Availability Heuristic", subtitle: "What Comes to Mind First", category: "memory", difficulty: "Intermediate",
        summary: "We judge probability by how easily examples come to mind. Recent, emotional, or unusual events seem more likely than they are.",
        explanation: "The availability heuristic is a mental shortcut where we estimate the likelihood of events based on how easily we can recall examples. This leads us to overestimate rare but memorable events and underestimate common but forgettable ones.",
        realWorldExample: "After seeing news coverage of airplane crashes, people often overestimate the danger of flying, even though statistically, driving is much more dangerous. The vivid, memorable nature of plane crash footage makes these events seem more probable than they actually are.",
        howToDetect: "Notice when your assessment of risk or probability is heavily influenced by recent news, dramatic stories, or personal experiences. Be especially wary of judging likelihood based on memorable anecdotes rather than actual statistics.",
        countermeasures: [
            "Look up actual statistics rather than relying on memory",
            "Consider what examples might be less memorable but more representative",
            "Be aware that media coverage doesn't reflect actual probability",
            "Ask yourself if your examples are representative of the whole population"
        ],
        quiz: {
            question: "After watching a documentary about shark attacks, you're afraid to swim in the ocean. This fear is likely due to:",
            correct: "The availability heuristic making shark attacks seem more probable than they are",
            incorrect: [
                "A rational assessment of actual shark attack statistics",
                "Your natural intuition about ocean dangers",
                "A realistic understanding of marine life behavior"
            ]
        }
    },
    {
        id: 12, title: "The It'll-Get-Worse-Before-It-Gets-Better Fallacy", subtitle: "False Hope in Decline", category: "decision-making", difficulty: "Intermediate",
        summary: "When something is getting worse, we often convince ourselves it will improve soon, preventing us from cutting our losses.",
        explanation: "This fallacy leads us to persist with failing strategies because we believe things must get worse before they get better. It's a form of wishful thinking that prevents us from making necessary changes or admitting that our current approach isn't working.",
        realWorldExample: "A business owner sees declining sales for six months but convinces himself that 'it's always darkest before the dawn' and that success is just around the corner. Instead of changing strategy or cutting losses, he continues with the same approach, leading to even greater losses.",
        howToDetect: "Listen for phrases like 'it's always darkest before the dawn' or 'things have to get worse before they get better' when you're facing declining situations. Notice if you're using optimistic sayings to avoid making difficult decisions.",
        countermeasures: [
            "Set objective criteria for when to change course before things get bad",
            "Regularly evaluate whether your current strategy is actually working",
            "Distinguish between temporary setbacks and fundamental problems",
            "Get outside perspectives on your situation to overcome emotional attachment"
        ],
        quiz: {
            question: "Your startup has been losing money for 8 months. You think 'it always gets worse before it gets better.' This thinking:",
            correct: "May prevent you from making necessary strategic changes or cutting losses",
            incorrect: [
                "Shows healthy optimism that will help you succeed",
                "Is based on solid business principles",
                "Indicates you understand natural business cycles"
            ]
        }
    }
    // Add more biases as needed to reach 25...
];

function generateAllRemainingPages() {
    console.log('Generating remaining bias pages...');
    
    [...complete25Biases, ...remainingBiases].forEach(bias => {
        if (bias.id <= 25) {
            const html = generateBiasPageHTML(bias);
            const filename = `bias-${bias.id}.html`;
            
            try {
                fs.writeFileSync(filename, html, 'utf8');
                console.log(`Generated ${filename}`);
            } catch (error) {
                console.error(`Error generating ${filename}:`, error.message);
            }
        }
    });
    
    console.log('All remaining bias pages generated successfully!');
}

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

if (require.main === module) {
    generateAllRemainingPages();
}

module.exports = { generateBiasPageHTML, complete25Biases, remainingBiases }; 