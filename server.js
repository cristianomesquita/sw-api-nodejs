const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');
const config = require('./config');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** 
* @api {get} List all supplies 
* @apiGroup Supplies
* @apiSuccess {Object[]} data Supplies's list
* @apiSuccess {String} data.id Supply id
* @apiSuccess {String} data.supplyType Supply Type
* @apiSuccess {Date} data.expirationDate Supply Expiration Date
* @apiSuccess {String} data.lat Supply Latitude
* @apiSuccess {String} data.long Supply Longitude
* @apiSuccessExample {json} Success
*    HTTP/1.1 200 OK
*   {
*    "data": 
*            [
*                {
*                "_id": "5a178e3888c08f16a6724a28",
*                "supplyName": "Carne",
*                "supplyType": "Proteína",
*                "lat": "748937493749837",
*                "long": "789479374897349",
*                "__v": 0,
*                "expirationDate": "2017-11-24T02:00:00.000Z"
*               }
*           ]
*    }   
* @apiErrorExample {json} Error
*    HTTP/1.1 500 Internal Server Error
*/

/** 
* @api {post} Register new supply 
* @apiGroup Supplies
* @apiParam {String} supplyName Supply Name
* @apiParam {String} supplyType Supply Type
* @apiParam {String} expirationDate Supply Expiration Date
* @apiParam {String} lat Supply's Latitude
* @apiParam {String} long Supply's Longitude
* @apiSuccess {String} id Supply id
* @apiSuccess {String} supplyType Supply Type
* @apiSuccess {Date} expirationDate Supply Expiration Date
* @apiSuccess {String} lat Supply Latitude
* @apiSuccess {String} long Supply Longitude
* @apiSuccessExample {json} Success
*    HTTP/1.1 200 OK
*   {
*    "success": true,
*    "message": "Supply registered with success",
*    "data": {
*        "__v": 0,
*        "supplyName": "Laranja",
*        "supplyType": "Vitamina",
*        "lat": "748937493749837",
*        "long": "789479374897349",
*        "_id": "5a1829c1d62c4b151b868585",
*        "expirationDate": "2017-11-30T02:00:00.000Z"
*    }
*   }
* @apiErrorExample {json} Error
* HTTP/1.1 500 Internal Server Error
* {
*    "success": false,
*    "message": {
*        "errors": {
*            "long": {
*                "message": "Path `long` is required.",
*                "name": "ValidatorError",
*                "properties": {
*                    "type": "required",
*                    "message": "Path `{PATH}` is required.",
*                    "path": "long"
*                },
*                "kind": "required",
*                "path": "long",
*                "$isValidatorError": true
*            }
*        },
*        "_message": "Supplies validation failed",
*        "message": "Supplies validation failed: long: Path `long` is required.",
*        "name": "ValidationError"
*    }
* }
*/
router.route('/sw-challenge')
    .get(routes.getSupplies)
    .post(routes.setSupply);

mongoose.connect(config.mongo.hostDB);

app.use('/api', router);

app.listen(PORT, () => console.log(`SERVER ON ${PORT}`));