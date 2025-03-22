import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
    const [message, setMessage] = useState("");
    const [reply, setReply] = useState("");

    const askBot = async () => {
        const response = await axios.post('/api/chatbot/ask', { message });
        setReply(response.data.reply);
    };

    return (
        <div>
            <input type="text" placeholder="Ask something..." onChange={(e) => setMessage(e.target.value)} />
            <button onClick={askBot}>Ask</button>
            <p>{reply}</p>
        </div>
    );
}

export default Chatbot;
