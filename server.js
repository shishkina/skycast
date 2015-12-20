'use strict';

let express = require('express');
let path = require('path');
let cors = require('cors');
let logger = require('morgan');
let bodyParser = require('body-parser');
let app = express();

let mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/skycast')

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
  console.log('mongoose connected');
})

let routes = require('./config/userRoutes');

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules'));

let server = app.listen(process.env.PORT || 3000, () => {
  console.log('server running');
})
