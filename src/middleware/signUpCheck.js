// To verify a Signup/register action, we need to check username and email are not
// already in use in database

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
      // Check in database if nickName already exists
      GamePlayer.findOne({ nickName: `${req.body.name}` }, (err, nickname) => {
        // If Name no exists response is false
        if (err) {
          res = res.status(500).send({ message: err });
          return res;
        }
        // Username already in database
        if (nickname !== null) {
          let x = {
            message: `Failed! Username ${req.body.name} is already in use!`,
          };
          res.status(400).send({
            message: `Failed! Username ${req.body.name} is already in use!`,
          });
          return;
        }

        // Check in database if email already there
        GamePlayer.findOne({ email: req.body.email }, (err, email) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          if (email) {
            res.status(400).send({
              message: `Failed! Username ${req.body.email} is already in use!`,
            });
            return;
          }
          next();
        });
      });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

module.exports = checkDuplicates;
