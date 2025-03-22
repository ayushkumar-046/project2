import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Pharmacy() {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        const fetchMedicines = async () => {
            const response = await axios.get('/api/pharmacy/list');
            setMedicines(response.data);
        };
        fetchMedicines();
    }, []);

    return (
        <div>
            <h2>Available Medicines</h2>
            <ul>{medicines.map(med => <li>{med.medicineName} - {med.price} INR</li>)}</ul>
        </div>
    );
}

export default Pharmacy;
