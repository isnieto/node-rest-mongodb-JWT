// Setting route controllers for all endpoint of th app
const gameController = require("./game.controller.js");
const { authJwt } = require("../middleware/index");

module.exports = (app) => {
  
  
  // Modify player name
  app.put("/players", authJwt, gameController.updateOne);
  
  // Delete a Player with playerId
  app.delete("/players/:playerId/games", authJwt, gameController.deletePlayerById);

  // Play one Game
  app.post("/players/:playerId/games/", authJwt, gameController.playOneGame);

  // Retrieve all players from database FALTA percentage mig
  app.get("/players/", authJwt, gameController.findAll);

  // Retrieve all scores from one player.
  app.get("/players/:playerId/games", authJwt, gameController.findOne);

  // Retrieve average ranking of all  players
  app.get("/players/ranking/all", authJwt, gameController.findRanking);

  // Retrieve worst player
  app.get("/players/ranking/loser", authJwt, gameController.findWorst);

  // Retrieve worst player
  app.get("/players/ranking/best", authJwt, gameController.findBest);
 
  
  // Page not available
  app.all("*", (req, res) => {
    res.status(404).send("ERROR 404. This page is not available.");
  });
};
