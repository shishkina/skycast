'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let request = require('request');

const WEATHER_KEY = process.env.WEATHER_KEY;

router.route('/')
  .get( (req,res) => {
    
  })


module.exports = router;
