const { checkDuplicates } = require("../middleware/index");
//const checkDuplicates = require("../middleware/signUpCheck")
const authController = require("../api/auth.controller");


module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

   // Register new player
   app.post("/auth/signup",  checkDuplicates, authController.registerOne);
   // Login for player
   app.post("/auth/signin", authController.signIn);
 
};


 