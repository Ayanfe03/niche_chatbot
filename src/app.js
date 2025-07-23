const express = require('express');
const cors = require('cors');
const app = express();
const llmRouter = require('../nichepoint');

app.use(cors());
app.use(express.json());
app.use('/v1/llm', llmRouter);


module.exports = app;