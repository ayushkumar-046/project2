const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/ask', async (req, res) => {
    const { message } = req.body;
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }]
    }, {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
    });
    res.json({ reply: response.data.choices[0].message.content });
});

module.exports = router;
