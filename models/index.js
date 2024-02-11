const { Sequelize, DataTypes } = require("sequelize");
const USER_NAME = process.env.USER_NAME;
const DB = process.env.DATABASE;
const PASSWORD = process.env.PASSWORD;

const sequelize = new Sequelize(DB, USER_NAME, PASSWORD, {
  host: "localhost",
  logging: false, 
  dialect: "mysql",

});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectToDB();

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./users')(sequelize, Sequelize);
db.Contact = require('./Contact')(sequelize, Sequelize);
db.SpamReport = require('./SpamReport')(sequelize, Sequelize);

// Define associations
db.User.hasMany(db.Contact);
db.Contact.belongsTo(db.User, { foreignKey: "userId" });

db.User.hasMany(db.SpamReport);
db.SpamReport.belongsTo(db.User, { foreignKey: 'userId' });

sequelize.sync({ force: false });

module.exports = db;
