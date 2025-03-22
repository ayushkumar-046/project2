import React, { useState } from 'react';
import axios from 'axios';

function Emergency() {
    const [trainNumber, setTrainNumber] = useState("");

    const sendAlert = async () => {
        await axios.post('/api/emergency/alert', { trainNumber });
        alert("Emergency alert sent to doctors!");
    };

    return (
        <div>
            <input type="text" placeholder="Enter Train Number" onChange={(e) => setTrainNumber(e.target.value)} />
            <button onClick={sendAlert}>Send Alert</button>
        </div>
    );
}

export default Emergency;
