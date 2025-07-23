const express = require('express');
const router = express.Router();
const askLLM = require('./bot');

router.post('/answer', async (req, res) => {
    try {
        const {question} = req.body;

        if (!question) {
            return res.status(400).json({error: "Question is required"});
        }
        const answer = await askLLM(question);

        res.json({answer: answer});
    } catch (error) {
        console.error("Error answering question:", error);
        res.status(500).json({error: "An error occurred while processing your request"});
    }
})

module.exports = router;