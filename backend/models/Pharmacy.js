const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
    trainNumber: String,
    medicineName: String,
    quantityAvailable: Number,
    price: Number
});

module.exports = mongoose.model('Pharmacy', pharmacySchema);
