'use strict';
// Load Game play model
const config = require("../config/auth.config.js");
const GamePlayer = require("../models/gameplay.model.js");

const checkDuplicates = async (req, res, next) => {
  try {
    if (
      Object.keys(req.body).length === 0 ||
      req.body.name === "" ||
      req.body.email === ""
    ) {
      res
        .status(400)
        .send({ message: "Sorry, nickname and email are needed to signUp!" });
    } else {

       GamePlayer.findOne({ nickName: `${req.body.name}` }, 
       (err, res) => {
        // If Name no exists response is false
        if (err) {
          
          res = res.status(500).send({ message: err });
          return res;
        }
        console.log(res)
        if (res === null) {
          next();
        } else{
          let x = { message: "Failed! Username is already in use!" };
          console.log(x)
          return x;
        } 
       
      });
     
    }
   
  } catch (e) {
    res.status(500).json({ message: e });
  }
  
};

module.exports = checkDuplicates;
