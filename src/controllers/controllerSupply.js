const SupplyModel = require('../models/SupplyModel');

const api = {};

api.setSupply = (req, res) => {
    const supply = new SupplyModel({
        supplyName: req.body.supplyName,
        supplyType: req.body.supplyType,
        expirationDate: req.body.expirationDate,
        lat: req.body.lat,
        long: req.body.long
    });

    supply.save((err, data) => {
        if (err) {
            res.json({ success: false, message: err });
            throw err;
        }
        res.json({ success: true, message: 'Supply registered with success', data });
    });
};

api.getSupplies = (req, res) => {
    SupplyModel.find({}, (err, data) => {
        if (err) {
            res.json({ success: false, message: err });
            throw err;
        }
        res.json({ success: true, message: 'Supplies list with success', data });
    });
};

module.exports = { api };