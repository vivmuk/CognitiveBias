// Venice AI API Service for Cognitive Bias Deep Exploration
class VeniceAPIService {
    constructor() {
        this.apiKey = 'ntmhtbP2fr_pOQsmuLPuN_nm6lm2INWKiNcvrdEfEC';
        this.baseURL = 'https://api.venice.ai/api/v1/chat/completions';
        this.model = 'venice-uncensored'; // Using Venice Uncensored model
    }

    async generateDeepExploration(biasTitle, biasDescription, explorationType = 'general') {
        const prompts = {
            general: `As an expert in cognitive psychology and behavioral economics, provide a comprehensive deep dive into "${biasTitle}". 

Context: ${biasDescription}

Please provide:
1. Advanced psychological mechanisms behind this bias
2. Neurological basis and brain regions involved
3. Evolutionary origins and adaptive value
4. Modern contexts where this bias is most problematic
5. Advanced strategies for mitigation beyond basic awareness
6. Connections to other cognitive biases and psychological phenomena
7. Real-world case studies from business, politics, or science

Make this engaging and practical for someone who wants to truly master their thinking.`,

            business: `Analyze "${biasTitle}" specifically from a business and entrepreneurial perspective.

Context: ${biasDescription}

Focus on:
1. How this bias affects business decision-making
2. Common business scenarios where this bias appears
3. Case studies of companies that fell victim to this bias
4. Strategic frameworks to protect against this bias in business
5. How to leverage awareness of this bias for competitive advantage
6. Leadership implications and team dynamics
7. Specific tools and processes businesses can implement`,

            personal: `Explore "${biasTitle}" from a personal development and daily life perspective.

Context: ${biasDescription}

Cover:
1. How this bias manifests in everyday personal decisions
2. Relationship and social implications
3. Financial decision-making impacts
4. Health and lifestyle choices affected
5. Practical daily exercises to build awareness
6. Personal reflection questions for self-assessment
7. Long-term strategies for personal growth and better decision-making`,

            scientific: `Examine "${biasTitle}" from a scientific research and evidence-based perspective.

Context: ${biasDescription}

Include:
1. Key research studies and findings
2. Experimental designs that demonstrate this bias
3. Statistical measures and effect sizes
4. Cross-cultural variations and universality
5. Individual differences and personality factors
6. Latest neuroscience research
7. Ongoing debates and controversies in the field`,

            historical: `Analyze "${biasTitle}" through historical examples and cultural contexts.

Context: ${biasDescription}

Explore:
1. Major historical events influenced by this bias
2. Cultural variations in how this bias manifests
3. Historical figures who exemplified or overcame this bias
4. How awareness of this bias has evolved over time
5. Societal and institutional impacts throughout history
6. Lessons from historical case studies
7. Modern parallels to historical examples`
        };

        try {
            console.log('Making Venice API request to:', this.baseURL);
            console.log('Using model:', this.model);
            
            const response = await fetch(this.baseURL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: [
                        {
                            role: 'user',
                            content: prompts[explorationType] || prompts.general
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 2048,
                    top_p: 0.9
                })
            });
            
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (!response.ok) {
                // Try to get error details from response
                let errorDetails = '';
                try {
                    const errorData = await response.json();
                    errorDetails = JSON.stringify(errorData);
                    console.error('Venice API error response:', errorData);
                } catch (e) {
                    errorDetails = await response.text();
                    console.error('Venice API error text:', errorDetails);
                }
                throw new Error(`Venice API error: ${response.status} ${response.statusText}. Details: ${errorDetails}`);
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('Error calling Venice API:', error);
            console.error('Request URL:', this.baseURL);
            console.error('Model:', this.model);
            return this.getFallbackContent(explorationType);
        }
    }

    async generateCustomPrompt(biasTitle, biasDescription, customPrompt) {
        const fullPrompt = `You are an expert in cognitive psychology and behavioral economics. 

The cognitive bias we're exploring is: "${biasTitle}"
Description: ${biasDescription}

User's specific question or area of interest: ${customPrompt}

Please provide a thoughtful, detailed response that combines scientific accuracy with practical insights. Make it engaging and actionable.`;

        try {
            console.log('Making Venice API request to:', this.baseURL);
            console.log('Using model:', this.model);
            
            const response = await fetch(this.baseURL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: [
                        {
                            role: 'user',
                            content: fullPrompt
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 1500,
                    top_p: 0.9
                })
            });
            
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            if (!response.ok) {
                // Try to get error details from response
                let errorDetails = '';
                try {
                    const errorData = await response.json();
                    errorDetails = JSON.stringify(errorData);
                    console.error('Venice API error response:', errorData);
                } catch (e) {
                    errorDetails = await response.text();
                    console.error('Venice API error text:', errorDetails);
                }
                throw new Error(`Venice API error: ${response.status} ${response.statusText}. Details: ${errorDetails}`);
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('Error calling Venice API:', error);
            console.error('Request URL:', this.baseURL);
            console.error('Model:', this.model);
            return "I apologize, but I'm having trouble connecting to the AI service right now. Please try again later or explore one of the predefined categories.";
        }
    }

    getFallbackContent(explorationType) {
        const fallbacks = {
            general: "I apologize, but I'm having trouble connecting to the AI service right now. This bias is a fascinating area of study that involves complex interactions between our evolutionary psychology, modern environments, and decision-making processes. Please try again later for a detailed exploration.",
            business: "I apologize, but I'm having trouble connecting to the AI service right now. This bias has significant implications for business strategy, leadership, and organizational decision-making. Please try again later for business-specific insights.",
            personal: "I apologize, but I'm having trouble connecting to the AI service right now. This bias affects many aspects of our daily lives and personal relationships. Please try again later for personalized guidance.",
            scientific: "I apologize, but I'm having trouble connecting to the AI service right now. There's extensive research on this bias in psychology and neuroscience journals. Please try again later for scientific insights.",
            historical: "I apologize, but I'm having trouble connecting to the AI service right now. This bias has shaped many historical events and cultural developments. Please try again later for historical analysis."
        };

        return fallbacks[explorationType] || fallbacks.general;
    }

    // Method to get suggested follow-up questions based on the bias
    getSuggestedQuestions(biasTitle) {
        const generalQuestions = [
            `How can I recognize when I'm falling into ${biasTitle} in real-time?`,
            `What are some surprising ways ${biasTitle} affects modern life?`,
            `How do successful people overcome ${biasTitle}?`,
            `What tools or techniques help counteract ${biasTitle}?`,
            `How does ${biasTitle} interact with technology and social media?`
        ];

        const specificQuestions = {
            "Survivorship Bias": [
                "How does survivorship bias affect startup success stories?",
                "Why do we underestimate failure rates in investing?",
                "How does survivorship bias influence career advice?"
            ],
            "Confirmation Bias": [
                "How does confirmation bias create political echo chambers?",
                "What role does confirmation bias play in conspiracy theories?",
                "How can scientists avoid confirmation bias in research?"
            ],
            "Sunk Cost Fallacy": [
                "How does sunk cost fallacy affect relationships?",
                "Why do governments continue failing projects?",
                "How does sunk cost thinking impact career changes?"
            ]
        };

        return specificQuestions[biasTitle] || generalQuestions;
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VeniceAPIService;
} 