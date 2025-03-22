const express = require('express');
const Pharmacy = require('../models/Pharmacy');
const router = express.Router();

router.get('/list', async (req, res) => {
    const medicines = await Pharmacy.find();
    res.json(medicines);
});

module.exports = router;
