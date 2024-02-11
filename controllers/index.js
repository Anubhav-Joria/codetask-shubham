module.exports = (app) => {
    require("./UserController/index")(app);
    require("./ContactController/index")(app);
    require("./SpamReportController/index")(app);
}
  