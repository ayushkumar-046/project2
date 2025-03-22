const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const doctorRoutes = require('./routes/doctors');
const pharmacyRoutes = require('./routes/pharmacy');
const chatbotRoutes = require('./routes/chatbot');
const emergencyRoutes = require('./routes/emergency');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use('/api/doctors', doctorRoutes);
app.use('/api/pharmacy', pharmacyRoutes);
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/emergency', emergencyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
