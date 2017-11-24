const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const moment = require('moment');

const routes = require('./routes');
const config = require('./config');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* */
router.route('/sw-challenge')
    .get(routes.getSupplies)
    .post(routes.setSupply);

mongoose.connect(config.mongo.hostDB);

app.use('/api', router);

app.listen(PORT, () => console.log(`SERVER ON ${PORT}`));