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

    supply.save((err, pass) => {
        if (err) {
            res.json({ message: err });
            throw err;
        }
        res.sendStatus(200);
    });
};

api.getSupplies = (req, res) => {
    SupplyModel.find({}, (err, data) => {
        if (err) {
            res.json({ err: err });
            throw err;
        }
        res.json({ data });
    });
};

module.exports = { api };