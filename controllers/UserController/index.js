const routes = require("./UserController.js");

module.exports = (app) => {
  app.post("/register", routes.CreateUser);
  app.post("/login", routes.LoginUser);
};
