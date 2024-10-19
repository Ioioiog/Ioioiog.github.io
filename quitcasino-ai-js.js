const chapters = [
    {
        title: "Your Turning Point Starts Now",
        content: `Welcome to the first day of your new life. This isn't just another self-help book; it's your personal roadmap to freedom. Whether you're questioning your gambling habits or you're certain there's a problem, you've made the right choice by being here.

        Gambling addiction can feel like an insurmountable challenge, but I want you to know that recovery is possible. Thousands have walked this path before you and have reclaimed their lives. You can too.

        In this chapter, we'll explore:
        1. Why people turn to gambling
        2. The signs that gambling has become more than just entertainment
        3. The courage it takes to acknowledge a problem
        4. What you can expect from this recovery journey

        Remember, every journey begins with a single step. By opening this book, you've already taken that step. You're not alone in this process, and every page you turn brings you closer to a life of freedom and fulfillment.

        Let's start by understanding why gambling can be so appealing. For many, it starts as a form of excitement, a way to socialize, or a means to escape daily stresses. The thrill of a potential win activates the brain's reward system, releasing dopamine – the feel-good neurotransmitter. This can create a powerful draw, leading some people to seek that feeling more and more frequently.

        However, when gambling shifts from an occasional activity to a compulsive behavior, it can start to take over your life. Signs that gambling might be becoming a problem include:
        - Spending more time or money on gambling than intended
        - Lying to loved ones about gambling activities
        - Feeling restless or irritable when trying to cut down
        - Gambling to escape problems or relieve negative emotions
        - Chasing losses, believing you can win back money
        - Jeopardizing important relationships or opportunities due to gambling

        Recognizing these signs in yourself takes tremendous courage. It's natural to feel scared, ashamed, or overwhelmed. But I want you to know that acknowledging the problem is the most crucial step towards recovery. It's a sign of strength, not weakness.

        As we progress through this book, we'll delve deeper into understanding gambling addiction, its impacts, and most importantly, strategies for overcoming it. You'll learn practical tools for managing urges, rebuilding relationships, and creating a fulfilling life beyond gambling.

        This journey won't always be easy, but it will be worth it. There may be challenges along the way, but each obstacle you overcome will make you stronger. Remember, recovery is not a destination, but a process – a new way of living that you'll cultivate day by day.

        You have the power within you to change your life. This book is here to guide you, support you, and provide you with the tools you need. Trust in yourself and in the process. Your new life starts now.`,
        exercise: "Empowerment Exercise: Take a moment to reflect on your decision to seek help. Write down three reasons why you deserve a life free from gambling addiction. These could be personal goals, relationships you want to improve, or simply the peace of mind that comes with freedom from addiction. Keep this list somewhere visible as a reminder of your commitment to change."
    },
    {
        title: "Understanding the Addiction Maze",
        content: `In this chapter, we're going to navigate the complex landscape of gambling addiction together. Understanding the nature of addiction is crucial for developing effective strategies to overcome it. We'll explore the science behind gambling addiction, debunk common myths, and help you understand your unique relationship with gambling.

        First, let's address a crucial point: gambling addiction is a real and recognized mental health disorder. It's not a sign of weakness or a character flaw. Like other addictions, it involves complex interactions between brain chemistry, psychological factors, and social influences.

        The Science of Gambling Addiction:
        1. Brain Chemistry: Gambling activates the brain's reward system, releasing dopamine – the same neurotransmitter involved in drug addictions. Over time, the brain may require more gambling to achieve the same "high," leading to tolerance.

        2. Psychological Factors: Gambling can serve as a maladaptive coping mechanism for stress, anxiety, or depression. It can also be driven by cognitive distortions – irrational beliefs about the nature of chance and probability."
    }
];

let currentPage = 0;

function createPages() {
    const book = document.getElementById('book');
    chapters.forEach((chapter, index) => {
        const page = document.createElement('div');
        page.className = 'page';
        page.style.transform = `rotateY(${index * 180}deg) translateZ(${index * 0.1}px)`;
        page.innerHTML = `
            <div class="page-content">
                <h2>${chapter.title}</h2>
                <p>${chapter.content}</p>
                <div class="exercise">
                    <h3>Interactive Exercise:</h3>
                    <p>${chapter.exercise}</p>
                </div>
            </div>
        `;
        book.appendChild(page);
    });
}

function updateBook() {
    const book = document.getElementById('book');
    book.style.transform = `rotateY(${-currentPage * 180}deg)`;
}

function nextPage() {
    if (currentPage < chapters.length - 1) {
        currentPage++;
        updateBook();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateBook();
    }
}

createPages();
updateBook();


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
