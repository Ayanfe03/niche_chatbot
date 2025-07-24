// Building a new specialized chatbot

//const axios = require('axios');

const dotenv = require('dotenv');
dotenv.config();

const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
})


const niche = "bible history";

/**
 * Ask the LLM a question and get its response.
 *
 * @param {string} question - The question to ask the LLM.
 *
 * @returns {string} The LLM's response to the question.
 */

const askLLM = async (question) => {
    const prompt = ` You are an expert in ${niche}. 
    Answer the following question strictly based on your knowledge of ${niche}. 
    If you don't know the answer, reply with "I don't know how to help with that"

    Format your answer in markdown format, using headings, bullet points, and code blocks as appropriate.
    
    Question: ${question}`;

    const response = await groq.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages: [
            {
                role: 'user',
                content: prompt
            }
        ]
    });   
    return response.choices[0]?.message.content;
}

module.exports = {
    askLLM
};