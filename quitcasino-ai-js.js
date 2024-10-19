const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const userMessage = document.getElementById('user-message');

// Simple AI responses
const aiResponses = {
    greetings: [
        "Hello! I'm here to help you quit gambling. How can I assist you today?",
        "Welcome! I'm your AI assistant to help with gambling recovery. What's on your mind?",
        "Hi there! I'm here to support your journey to quit gambling. What would you like to talk about?"
    ],
    urges: [
        "It's normal to feel urges. Try taking deep breaths and focusing on why you want to quit.",
        "Urges are temporary. Consider calling a supportive friend or engaging in a hobby you enjoy.",
        "Remember, every time you resist an urge, you're getting stronger. What positive activity could you do right now?"
    ],
    motivation: [
        "You're taking an important step by seeking help. Remember why you started this journey.",
        "Every day without gambling is a victory. You're doing great by reaching out for support.",
        "Your determination is admirable. Think about the positive changes you've experienced since deciding to quit."
    ],
    resources: [
        "Have you considered attending a Gamblers Anonymous meeting? Many find them very helpful.",
        "Therapy can be a great resource. Would you like information on finding a therapist specializing in gambling addiction?",
        "There are many online resources available. The National Council on Problem Gambling has some great information."
    ],
    default: [
        "I'm here to support you. Could you tell me more about what you're experiencing?",
        "That's an important point. How does this relate to your recovery journey?",
        "Thank you for sharing. What do you think would be a good next step for you?"
    ]
};

function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user-message' : 'ai-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(userInput) {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)];
    } else if (lowerInput.includes('urge') || lowerInput.includes('temptation')) {
        return aiResponses.urges[Math.floor(Math.random() * aiResponses.urges.length)];
    } else if (lowerInput.includes('motivate') || lowerInput.includes('encourage')) {
        return aiResponses.motivation[Math.floor(Math.random() * aiResponses.motivation.length)];
    } else if (lowerInput.includes('help') || lowerInput.includes('resource')) {
        return aiResponses.resources[Math.floor(Math.random() * aiResponses.resources.length)];
    } else {
        return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
    }
}

userInput.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = userMessage.value.trim();
    if (message) {
        addMessage(message, true);
        userMessage.value = '';

        // Simulate AI thinking
        setTimeout(() => {
            const aiResponse = getAIResponse(message);
            addMessage(aiResponse, false);
        }, 1000);
    }
});

// Initial AI greeting
addMessage("Hello! I'm your AI assistant to help you quit gambling. How can I support you today?", false);
