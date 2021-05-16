// gather our variables from .env file and map them into well-named variables and export them through a module.
// under 'config/index.js

require("dotenv").config();

module.exports = {
  //PORT: process.env.PORT || 5001,
  SECRET: "secret",
};
