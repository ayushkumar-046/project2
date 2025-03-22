import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckDoctor from './pages/CheckDoctor';
import Pharmacy from './pages/Pharmacy';
import Chatbot from './pages/Chatbot';
import Emergency from './pages/Emergency';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CheckDoctor />} />
                <Route path="/pharmacy" element={<Pharmacy />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/emergency" element={<Emergency />} />
            </Routes>
        </Router>
    );
}

export default App;
