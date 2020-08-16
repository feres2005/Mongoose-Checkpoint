const express = require('express')
const mongoos = require('mongoose')
let User = require('../models/Users');
var router = express.Router()

// create user
router.post('/add', function (req, res) {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.json(err));
 
});

// Find all users 
router.get('/', function (req, res) {
  User.find()
    .then(users => res.json({message:"success", users}))
    .catch(err => res.json(err));
});

// Find one user
router.get("/:id", function (req, res) {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.json(err));

});

  // delete a user
  router.delete("/:id",function (req,res ){
    User.findByIdAndDelete(req.params.id)
    .then(users => res.json({message:"delete successfully",users}))
    .catch(err => res.json(err));
  })
module.exports = router
//apdate one user
router.put('/:id',function(req,res){
  User.findByIdAndUpdate(req.params.id)
  .then(users => res.json({message:"update successfully",users}))
  .catch(err => res.json(err));
})
