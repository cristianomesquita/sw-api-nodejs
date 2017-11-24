const express = require('express');
const router = express.Router();
const ctrlSupply = require('./src/controllers/controllerSupply');

module.exports = {
    getSupplies: (req, res) => {
        ctrlSupply.api.getSupplies(req, res);
    },
    setSupply: (req, res) => {
        ctrlSupply.api.setSupply(req, res);
    }
};