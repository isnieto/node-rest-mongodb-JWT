// Create database connection
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongo_uri= 'mongodb://localhost:27017/dadosGame';

const connection = mongoose
  .connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) =>
    console.log("Connection established with " + mongo_uri)
  )
  .catch((err) => console.log(err));

module.exports = connection;
