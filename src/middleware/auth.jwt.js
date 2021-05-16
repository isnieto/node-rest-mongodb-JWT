//  For the process of authentication and authorization
// We check if token is provided, legal or not. We get token from x-access-token of HTTP headers,
// then use jsonwebtoken's verify() function
const config = require("../config/auth.config.js");
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};


module.exports = verifyToken;