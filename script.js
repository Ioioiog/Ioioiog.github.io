const chapters = [
    {
        title: "Your Turning Point Starts Now",
        content: "Welcome to the first day of your new life. This isn't just another self-help book; it's your personal roadmap to freedom. Whether you're questioning your gambling habits or you're certain there's a problem, you've made the right choice by being here.",
        exercise: "Empowerment Exercise: Write down three reasons why you deserve a life free from gambling addiction."
    },
    {
        title: "Understanding the Addiction Maze",
        content: "Let's navigate the complex landscape of gambling addiction together. We'll explore the science behind it, debunk common myths, and help you understand your unique relationship with gambling.",
        exercise: "Self-Reflection: Identify three triggers that lead you to gamble and brainstorm alternative responses to each."
    },
    {
        title: "Calculating the True Cost",
        content: "It's time for an honest assessment. We'll help you tally not just the financial toll, but the emotional, relational, and personal costs of gambling in your life.",
        exercise: "Impact Inventory: Create a comprehensive list of how gambling has affected different areas of your life."
    },
    {
        title: "Your Recovery Toolkit",
        content: "Now, let's arm you with practical strategies to combat gambling urges, manage triggers, and take control of your finances. This is where your comeback story begins.",
        exercise: "Strategy Development: Design a personal action plan for handling your top three gambling triggers."
    },
    {
        title: "Rewiring for Success",
        content: "Your mind is your most powerful ally in recovery. We'll guide you through techniques to challenge gambling thoughts, increase mindfulness, and build a new, addiction-free identity.",
        exercise: "Thought Challenge: Identify a recurrent gambling thought and practice reframing it positively."
    },
    {
        title: "Healing Relationships",
        content: "Gambling doesn't just affect you—it impacts those around you. Learn how to rebuild trust, set healthy boundaries, and leverage your support network in recovery.",
        exercise: "Communication Plan: Draft a heartfelt message to a loved one explaining your commitment to change."
    },
    {
        title: "Crafting Your New Reality",
        content: "Recovery is about creating a life so good you don't need to escape from it. We'll help you rediscover passions, set meaningful goals, and build a fulfilling gambling-free lifestyle.",
        exercise: "Future Visioning: Describe in detail your ideal day one year from now, free from gambling."
    },
    {
        title: "Securing Long-Term Freedom",
        content: "Your journey doesn't end here. We'll equip you with strategies for maintaining motivation, preventing relapse, and continuing personal growth long after you close this book.",
        exercise: "Resilience Building: Create a detailed plan for managing potential setbacks in your recovery journey."
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
