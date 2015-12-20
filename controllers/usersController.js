'use strict';

let User = require('../models/user');

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const secret = SECRET;

//GET
function getUser(req,res) {
  console.log('getting a user');
}

function getAuth(req, res) {
  console.log('Authenticating user HTTP header token');

}

//POST
function newUser(req,res) {
  //create new user route

  let user = new User(req.body);

  user.save( (error) => {
    if (error) res.json({message: 'Could not create new user because of:' + error});

    res.json(user);
  });
}

function loginUser(req, res) {
  let userParams = req.body;
  User.findOne({email: userParams.email}, (error, user) => {
    if (error) {
      throw error;
    }
    else if (!user) {
      res.status(500).json({message: 'User not found!'});
    }
    else {
      user.authenticate(userParams.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          let token = jwt.sign(user, secret, {expiresIn: 1444000});

          res.json({
            success: true,
            message: 'Authorization successful',
            user: user._doc,
            token: token
          });
        }
        else {
          return res.status(401).send({message: 'unauthorized access'})
        }
      });
    }
  });
}

//PUT
function updateUser(req,res) {

}

module.exports = {
  loginUser: loginUser,
  newUser: newUser,
  getAuth: getAuth,
  getUser: getUser,
  updateUser: updateUser
}
