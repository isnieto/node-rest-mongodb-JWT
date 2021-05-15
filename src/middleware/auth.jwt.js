//  Process authentication and authorization
// Check if token is provided, legal or not. We get token from x-access-token of HTTP headers, 
// then use jsonwebtoken's verify() function

const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

module.exports = {
  verifyToken: (req, res, next) => {
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
  },
};
