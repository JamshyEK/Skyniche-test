const mongoose = require("mongoose");
const Users = require('../models/users')

//Users add
exports.addUsers = (req, res, next) => {
  console.log(req);
  console.log("testing");
  console.log(req.body.desig);

  const users = new Users({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name.trim(),
    email: req.body.email.trim(),
    phone: req.body.phone.trim(),
    desig: req.body.desig.trim(),
    joinDate: req.body.joinDate.trim()
  });


  console.log(users,"---------")
  users.save().then((result) => {
    console.log("Saved");
    res.status(201).json({
      id: result._id,
      name: result.name,
      email: result.email,
      phone: result.phone,
      desig: result.desig,
      joinDate:result.joinDate
    });
  })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};




//Users fetch
exports.getUsers = (req, res, next) => {
  Users.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};





// Users update
exports.updateUsers = (req, res, next) => {

  let id = req.body.id.trim();
  let name = req.body.name.trim();
  let email = req.body.email.trim();
  let phone = req.body.phone.trim();
  let desig = req.body.desig.trim();



  Users.updateOne(
    { _id: id },
    {

      name: name,
      email: email,
      phone: phone,
      desig: desig
    }
  )
    .exec()
    .then((result) => {
      res.json({ result: result, msg: "Users Updated" });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};




//Users delete
exports.deleteUsers = (req, res, next) => {
  console.log("testing")
  id = req.params.id;
  Users.deleteOne({ _id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};




//search Users

exports.searchUsers = (req, res, next) => {
  id = req.params.id;
  console.log(id, "----+++")
  // Users.find().or([{ name: id }, { phone: id }])
  // .then(users => { 
  //   console.log(users,"-----------")
  //  })
  // .catch(error => { /*error logic here*/ })

  Users.find({ name: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });



};