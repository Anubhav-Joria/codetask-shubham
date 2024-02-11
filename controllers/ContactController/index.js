const routes = require("./ContactController.js");
const authenticateUser = require('../middleware/authenticateUser.js');

module.exports = (app) => {
  app.post("/contacts",authenticateUser, routes.CreateContact);
  app.get("/contacts",authenticateUser, routes.getAllContacts);
};
