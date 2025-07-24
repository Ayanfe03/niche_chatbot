const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const llmRouter = require('../nichepoint');

app.use(cors());
app.use(express.json());
app.use('/v1/llm', llmRouter);
app.use(express.static(__dirname));

module.exports = app;