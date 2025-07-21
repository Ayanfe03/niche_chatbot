// Building a new specialized chatbot

// Building a new specialized chatbot

const axios = require('axios');

// Example: Set your niche here
const niche = "history"; // Change to your chosen niche

async function askLLM(question) {
    // Prompt engineering: instruct the model to answer only niche questions
    const prompt = `
You are an expert in ${niche}. Answer the following question strictly based on your knowledge of ${niche}. 
If you don't know the answer, reply with "I don't know that yet."

Question: ${question}
`;

    // Replace with your LLM API endpoint and key
    const response = await axios.post('YOUR_LLM_API_ENDPOINT', {
        prompt: prompt,
        max_tokens: 200
    }, {
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
        }
    });

    // Extract and return the answer
    return response.data.answer || "I don't know that yet.";
}

// Example usage
async function main() {
    const userQuestion = "Who was the first president of the United States?";
    const answer = await askLLM(userQuestion);
    console.log("Answer:", answer);
}

main();