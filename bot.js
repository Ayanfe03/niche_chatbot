// Building a new specialized chatbot

// Building a new specialized chatbot

const axios = require('axios');


const niche = "bible history";

async function askLLM(question) {
    
    const prompt = `
You are an expert in ${niche}. Answer the following question strictly based on your knowledge of ${niche}. 
If you don't know the answer, reply with "I don't know that yet."

Question: ${question}
`;

    const response = await axios.post('LLM_API_ENDPOINT', {
        prompt: prompt,
        max_tokens: 200
    }, {
        headers: {
            'Authorization': 'Bearer API_KEY'
        }
    });

    // Extract and return the answer
    return response.data.answer || "I don't know that yet.";
}

// Example usage
async function main() {
    const userQuestion = "Who was the father of Abraham?";
    const answer = await askLLM(userQuestion);
    console.log("Answer:", answer);
}

main();