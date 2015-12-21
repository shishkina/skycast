'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let request = require('request');

const GOOGLE_KEY = process.env.GOOGLE_KEY;

router.route('/')
  .get( (req, res) => {
    request.post(
      'https://www.googleapis.com/geolocation/v1/geolocate?key='+GOOGLE_KEY,
       (err, res, body) => {

       if (err) throw err;

       }).on('data', (data) => {
         res.json(JSON.parse(data));
       })
  })


module.exports = router;
