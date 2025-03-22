const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

router.post('/check', async (req, res) => {
    const { pnr } = req.body;
    const doctors = await Doctor.find({ trainNumber: pnr });
    res.json(doctors);
});

module.exports = router;
