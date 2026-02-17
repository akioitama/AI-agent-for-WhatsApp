const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

console.log('Gemini Service Initialized');
if (process.env.GEMINI_API_KEY) {
    console.log('API Key loaded, length:', process.env.GEMINI_API_KEY.length);
} else {
    console.error('API Key NOT loaded!');
}

// Contextual memory: a simple in-memory store
// For production, use Redis or a Vector DB
const conversationHistory = {};

async function generateResponse(userMessage, userId) {
    // Initialize context if new user
    if (!conversationHistory[userId]) {
        conversationHistory[userId] = model.startChat({
            history: [],
            generationConfig: {
                maxOutputTokens: 1000,
            },
        });
    }

    try {
        const chat = conversationHistory[userId];
        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        const botMessage = response.text();

        return botMessage;
    } catch (error) {
        console.error('Error generating response:', error);
        return "I'm sorry, I'm having trouble processing your request right now.";
    }
}

module.exports = { generateResponse };
