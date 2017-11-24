const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplyModel = new Schema({
    supplyName: { type: String, required: true },
    supplyType: { type: String, required: true },
    expirationDate: { type: Date, required: true, default: Date.now },
    lat: { type: String, required: true },
    long: { type: String, required: true }
});

module.exports = mongoose.model('Supplies', SupplyModel);