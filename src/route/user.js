const express= require('express')
const mongoos=require('mongoose')
let User = require('../models/Users');
var Router=express()



// 




Router.route('/').get((req, res) => {
    
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

Router.route('/add').post((req, res) => {
  const user = req.body.user;

  const newUser = new User({user:user});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = Router
  // find all users


  // find a user


  // udapte a user



  // delete a user