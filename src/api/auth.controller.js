const config = require("../config/auth.config");
const GamePlayer = require("../models/gameplay.model.js");
const Player = require("./player.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  // Create one player
  registerOne: (req, res) => {
    try {
      const player = new GamePlayer({
        playerId: (await GamePlayer.find().countDocuments()) + 1;
        nickName: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const res = await player.save();
        return res;
      } catch (error) {
        return error;
      }
  },
}; // end module exports
 