document.addEventListener("DOMContentLoaded", () => {
    const chatbotMessages = document.getElementById("chatbotMessages");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    sendBtn.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            displayMessage("You", userMessage);
            userInput.value = ""; // Clear the input
            getChatbotResponse(userMessage);
        }
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the bottom
    }

    function getChatbotResponse(message) {
        const responses = {
            "hi": ["Hello!", "Hi there!", "Greetings!", "How can I assist you today?"],
            "hello": ["Hi!", "Hello!", "Hey there!", "What's up?"],
            "how are you": ["I'm just a bot, but I'm doing great! How about you?", "I'm here to help you! How are you doing?", "Feeling great, thanks for asking!"],
            "need help": ["Click on contact and Send message so that our team will contact!"],
            "tell me a joke": [
                "Why don't scientists trust atoms? Because they make up everything!",
                "What do you call fake spaghetti? An impasta!",
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "What do you get when you cross a snowman and a vampire? Frostbite!",
                "Why did the math book look sad? Because it had too many problems!"
            ],
            "what can you do": ["I can chat with you, tell jokes, and provide information!", "I'm here to assist you with your queries.", "I can answer questions and keep you company!"],
            "goodbye": ["Goodbye! Have a great day!", "See you later!", "Take care!", "Farewell!"],
            "help": ["I'm here to help! What do you need?", "How can I assist you today?", "What can I do for you?"],
            "thank you": ["You're welcome!", "No problem!", "Glad to help!", "Anytime!"],
            "what's up": ["Not much, just here to chat! What about you?", "Just hanging out, how can I assist you?", "All good here! What’s on your mind?"],
            "what is your favorite color": ["I don't have a favorite, but I think blue is nice!", "Colors are fascinating! What's yours?", "I love all colors equally!"],
            "tell me something interesting": ["Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old!", "Octopuses have three hearts!", "Bananas are berries, but strawberries aren't!"],
            "do you have any hobbies": ["I enjoy chatting with users like you!", "My hobby is to learn and respond to interesting questions!", "I love collecting jokes!"],
            "what time is it": ["I'm not sure, but you can check your device's clock!", "I can't tell time, but I'm always ready to chat!"],
            "where are you from": ["I exist in the digital world, but I'm here for you wherever you are!", "I'm from the cloud!"],
            "how's the weather": ["I don't know the current weather, but I hope it's nice where you are!", "I can't check the weather, but you can look it up online!"],
            "who created you": ["I was created by developers who love building chatbots!", "I’m a product of artificial intelligence research!"],
            "can you speak multiple languages": ["I can understand and respond in multiple languages, but my primary language is English!", "Yes, I can chat in various languages! What language do you prefer?"],
            "what's your favorite food": ["I don't eat, but I've heard pizza is quite popular!", "I can't taste food, but I know many people love ice cream!"],
        };

        // Check for keyword matches instead of exact matches
        let matchedResponse = findMatchingResponse(responses, message);
        if (matchedResponse) {
            displayMessage("Bot", matchedResponse);
        } else {
            displayMessage("Bot", getFallbackResponse(message));
        }
    }

    function findMatchingResponse(responses, message) {
        const lowerCaseMessage = message.toLowerCase();
        for (const key in responses) {
            if (lowerCaseMessage.includes(key)) {
                return responses[key][Math.floor(Math.random() * responses[key].length)];
            }
        }
        return null; // No match found
    }

    function getFallbackResponse(message) {
        const fallbackResponses = [
            "That's interesting! Can you tell me more?",
            "I don't have an answer for that, but I'm all ears!",
            "Hmm, that's a tough one! What else can I help you with?",
            "Let's change the topic. What else do you want to chat about?",
            "I'm learning new things every day! Can you explain that to me?",
            "That sounds intriguing! How about something else?",
            "I love hearing new ideas! What's on your mind?",
            "Can you ask me something different? I'm eager to help!",
            "That sounds fascinating! Tell me more!",
            "I might not know, but I'm here to listen!"
        ];

        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }
});
