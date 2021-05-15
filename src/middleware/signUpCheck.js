// Load Game play model
const config = require("../config/auth.config.js");
const GamePlayer = require("../models/gameplay.model.js");

const checkDuplicates = async (req, res, next) => {
  
     try {
      // Check if UserName  already exists
      GamePlayer.findOne({ nickName: `${req.body.nickName}` }, (err, res) => {
        // If Name no exists response is false
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if (res) {
          res.status(400).send({
            message: `Failed! Username ${req.body.nickName} is already in use!`,
          });
          return;
        }
        // Check if Email  already exists
        GamePlayer.findOne({ nickName: `${req.body.email}` }, (err, res) => {
          // If Name no exists response is false
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          if (res) {
            res.status(400).send({
              message: `Failed! Email ${req.body.email} is already in use!`,
            });
            return;
          }
        });
      });
      next();
    } catch (err) {
      res.status(500).send({ message: err });
      return;
    }
  }


  module.exports = checkDuplicates;