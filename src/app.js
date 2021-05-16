// Create app after loading express module
const cors = require("cors");
const express = require("express");
const app = express();

// Read body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors provides Express middleware to enable CORS
app.use(
  cors({
    orgin: "http://localhost:8081",
    credentials: true,
  })
);

module.exports = app;
