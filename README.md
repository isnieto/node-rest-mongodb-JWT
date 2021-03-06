# Node REST Server + MongoDb + JWT

Goal of the project is to build a API server that supports a simple dice game including middleware for authentication and authorization with JWT.

Following features have been taken in considereation to build the API:
- In case the result of the two dice is 7, the game is won, otherwise it is lost.
- In order to play the game, you must register as a player with a name. A player can see a list of all the rolls he has made and the success rate.
- In order to make a roll, a user must register with a non-repeated name. When created, it is assigned a unique numeric identifier and a registration date.
- If the user doesnt wish to insert a user name, the user name will be called "ANONYMOUS", as default value. There can be more than one "ANONYMOUS" player.
- Each player can see a list of all the rolls they have made, with the value of each dice and whether or not the game has been won. In addition, you can know your success rate for all the runs you have made.
- You can't delete a particular game, but you can delete the entire list of rolls per player. 
- The software should be able to list all the players in the system, the success rate of each player and the average success rate of all the players in the system.
- The software must respect the main design patterns.

## Code style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Tech/framework used
<b>Built with</b>
- [Node](https://nodejs.org/es/)
- [Express](https://expressjs.com/es/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/introduction)

## Features
All urls need authorization through JWT method:

Methods     	Urls	                       Actions
* POST    /auth/signup                > Signup new Player
* POST    /auth/signin                > Login for Players (required authorization token)
* PUT     /players                    > Update/Modify the name of an existing 
* POST    /players/{id}/games/        > A player plays one round.
* DELETE  /players/{id}/games         > Delete all rounds of a player
* GET     /players/                   > Retrieve the list of all players
* GET     /players/{id}/games         > Retrieve a list with all games and results of a player
* GET     /players/ranking/all        > Retrieve the ranking of all players and their average pencentage
* GET     /players/ranking/loser      > Retrieve best player average pencentage
* GET     /players/ranking/winner     > Retrieve worst player average pencentage

## Installation

1. Install Node 14 or later. You can use the package manager of your choice.
2. Clone this repository.
3. Run 'npm i' to install the dependencies.
4. Modify file name `.env_template` to `.env`
5. Run 'npm start' to start the badge server and the frontend dev server.
6. API server can be tested with Postman. For routes see "Features".


## Observations
The project try to implement best practices following the following structure:

<p align="center">
    <img src="https://github.com/uzs7jf/node-rest-mysql/blob/master/public/rest-api-structure.png">
</p>


### Testing with Postman
A legal JWT must be added to HTTP __x-access-token Header__ for all Client access protected resources like following:

<p align="center">
    <img src="https://github.com/uzs7jf/node-rest-mongodb-JWT/blob/main/public/postman.png">
</p>


- `server.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `api/` - This folder contains all controller, authentication and game, and corresponding routes data
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `models/` - This folder contains the schema definitions for our mongoose and player model..
- `middleware/` - This folder contains the authorization and authentication to get access to the API.
- `services/` - This folder contains functions for the game play and for ranking.
- `models/` - This folder contains the schema definitions for our mongoose and player model.


## Related projects
Here's a list of the related projects where you can find similar exercises with using other technologies:

- REST APi with NodeJS and MySQL: https://github.com/uzs7jf/node-rest-mysql
- REST APi with NodeJS and MongoDB: https://github.com/uzs7jf/node-srv-mongodb
