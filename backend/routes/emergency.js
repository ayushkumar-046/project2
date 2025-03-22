const express = require('express');
const twilio = require('twilio');
const Doctor = require('../models/Doctor');
const router = express.Router();

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

router.post('/alert', async (req, res) => {
    const { trainNumber } = req.body;
    const doctors = await Doctor.find({ trainNumber });

    doctors.forEach(doctor => {
        client.messages.create({
            body: `🚨 Emergency! A passenger needs medical help on Train ${trainNumber}.`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: doctor.phone
        });
    });

    res.json({ message: "Emergency alert sent!" });
});

module.exports = router;
