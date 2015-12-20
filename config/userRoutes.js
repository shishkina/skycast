'use strict';

let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');

let secret = process.env.SECRET;

let usersController = require('../controllers/usersController');

router.route('/user/login')
  .post(usersController.loginUser);

router.route('/user/new')
  .post(usersController.newUser);

//middleware for token authentication

router.use( (req,res,next) => {
  let token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) res.status(401).json({message: 'Token was not authorized'})

      else {
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    return res.status(403).json({message: "Token absent, premission denied"})
  }
});

router.route('/user/:id')
  .get(usersController.getUser)

  .put(usersController.updateUser)

module.exports = router;
