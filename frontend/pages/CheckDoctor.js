import React, { useState } from 'react';
import axios from 'axios';

function CheckDoctor() {
    const [pnr, setPnr] = useState("");
    const [doctors, setDoctors] = useState([]);

    const fetchDoctors = async () => {
        const response = await axios.post('/api/doctors/check', { pnr });
        setDoctors(response.data);
    };

    return (
        <div>
            <input type="text" placeholder="Enter PNR" onChange={(e) => setPnr(e.target.value)} />
            <button onClick={fetchDoctors}>Check</button>
            <ul>{doctors.map(doc => <li>{doc.name} - {doc.specialization} (Seat {doc.seatNumber})</li>)}</ul>
        </div>
    );
}

export default CheckDoctor;
