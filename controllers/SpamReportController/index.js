const routes = require("./SpamReportController.js");
const authenticateUser = require('../middleware/authenticateUser.js');

module.exports = (app) => {
  app.post("/spam-reports", authenticateUser,  routes.reportSpam);
};
