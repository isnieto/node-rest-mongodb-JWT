// gather our variables from .env file and map them into well-named variables and export them through a module.
// under 'config/index.js

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  SECRET: process.env.ACCESS_TOKEN_SECRET
};
