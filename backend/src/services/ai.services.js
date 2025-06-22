require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

console.log('Using Gemini API Key:', process.env.GEMINI_API_KEY ? 'FOUND' : 'NOT FOUND');

async function getResponse(prompt) {
    try {
        // Changed the model to 'gemini-1.5-flash'
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); 
        const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
        const response = result.response;
        return response.text();
    } catch (error) {
        if (error && error.message && error.message.includes('429')) {
            return "The AI service is currently over its usage quota. Please try again in a few minutes or check your API usage limits.";
        }
        // Optionally, log the error for debugging
        console.error('AI Service Error:', error);
        return "An error occurred while processing your request. Please try again later.";
    }
}

module.exports = getResponse;