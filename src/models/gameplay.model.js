//Create the collection Schema for mongo
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create model and exports it

const playerSchema = new mongoose.Schema({
  playerId: Number,
  nickName: String,
  email: String,
  password: String,
  registeredAt: { type: Date, default: Date.now },
  games: [
    {
      gameDate: { type: Date, default: Date.now },
      score: Number,
    },
  ],
});

const GamePlayer = mongoose.model("GamePlayer", playerSchema);
// Create model and exports it
module.exports = GamePlayer;
