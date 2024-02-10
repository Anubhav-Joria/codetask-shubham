const { Sequelize } = require("sequelize");
const db = require("../../models");
const User = db.user;

const CreateUser = async (req, res) => {
  const { name, phoneNumber, email, password } = req.body;
  if(!name || !phoneNumber || !password){
    return res.json({
      status: 400,
      message: "Invalid parameters",
    });
  }

  var user = await User.create({ name: name, phoneNumber: phoneNumber, email: email, password: password });

  return res.json({
    status: 200,
    message: "User created successfully",
    user: user,
  });
};


const LoginUser = async (req, res) => {
  const { name, phoneNumber, email, password } = req.body;
  if(!name || !phoneNumber || !password){
    return res.json({
      status: 400,
      message: "Invalid parameters",
    });
  }

  var user = await User.create({ name: name, phoneNumber: phoneNumber, email: email, password: password });

  return res.json({
    status: 200,
    message: "User created successfully",
    user: user,
  });
};

module.exports = {
  CreateUser,
  LoginUser
};
